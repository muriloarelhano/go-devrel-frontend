import { Button } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { saveAs } from "file-saver";
import { t } from "i18next";
import { DateTime } from "luxon";
import { FaDownload } from "react-icons/fa";

const columnHelper = createColumnHelper<any>();

const download = (form: any) => {
  saveAs(
    new Blob([JSON.stringify(form)]),
    `form_${DateTime.now().toMillis()}.json`
  );
};
export const columns = [
  columnHelper.accessor(`userId`, {
    header: `User ID`,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor(`formIdentifier`, {
    header: `Identificador`,
    cell: (info) => t("forms." + info.getValue()),
  }),
  columnHelper.accessor(`stage`, {
    header: `Estágio`,
    cell: (info) => t("stages." + info.getValue()),
  }),
  columnHelper.accessor(`createdAt`, {
    header: "Criado em",
    cell: (info) =>
      DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_SHORT),
  }),
  columnHelper.display({
    id: "actions",
    header: "Ações",
    cell: (props) => (
      <Button
        size={"sm"}
        colorScheme={"green"}
        leftIcon={<FaDownload />}
        onClick={() => download(props.row.original)}
      >
        Baixar
      </Button>
    ),
  }),
];
