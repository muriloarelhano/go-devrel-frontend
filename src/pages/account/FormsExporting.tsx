import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { saveAs } from "file-saver";
import { useFormik } from "formik";
import { DateTime } from "luxon";
import { ExportFormByDateDto } from "../../interfaces";
import { ExportFormatTypes } from "../../interfaces/interfaces";
import { exportByDate } from "../../services/formService";

export const FormsExporting = () => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      format: "" as any,
      startDate: "",
      endDate: "",
    },
    onSubmit: async (values: ExportFormByDateDto) => {
      const forms = await exportByDate(values, toast);
      const data =
        values.format === ExportFormatTypes.JSON
          ? JSON.stringify(forms)
          : forms;
      saveAs(
        new Blob([data]),
        `forms_${DateTime.now().toMillis()}.${values.format.toLowerCase()}`
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack justify={"start"} align={"start"} maxW={"300px"} gap={4}>
        <FormControl>
          <FormLabel> Selecione um formato de exportação</FormLabel>
          <Select
            id="format"
            name="format"
            placeholder="Select file format"
            onChange={formik.handleChange}
            value={formik.values.format}
          >
            <option value="CSV">CSV</option>
            <option value="JSON">JSON</option>
          </Select>
        </FormControl>

        <HStack gap={4}>
          <FormControl>
            <FormLabel>De (Data Inicial)</FormLabel>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.startDate}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Até (Data Final)</FormLabel>
            <Input
              id="endDate"
              name="endDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.endDate}
            />
          </FormControl>
        </HStack>

        <FormControl>
          <Button type="submit">Baixar</Button>
        </FormControl>
      </VStack>
    </form>
  );
};
