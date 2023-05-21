import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { saveAs } from "file-saver";
import { useFormik } from "formik";
import { DateTime } from "luxon";
import { ExportFormByDateDto } from "../../interfaces";
import { ExportFormatTypes } from "../../interfaces/interfaces";
import { exportByDate } from "../../services/formService";

async function exportForms(values: ExportFormByDateDto, toast: any) {
  const forms = await exportByDate(values);

  const data =
    values.format === ExportFormatTypes.JSON ? JSON.stringify(forms) : forms;
  saveAs(
    new Blob([data]),
    `forms_${DateTime.now().toMillis()}.${values.format.toLowerCase()}`
  );
  toast({
    title: "Exportação concluída",
    status: "success",
    isClosable: true,
  });
}

export const FormsExporting = () => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      format: "" as any,
      startDate: "",
      endDate: "",
    },
    onSubmit: async (values: ExportFormByDateDto) => {
      try {
        exportForms(values, toast);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const errorData = error.response?.data as any;
          toast({
            status: "error",
            isClosable: true,
            title: `${error.response?.status} - Ocorreu um erro com a requisição`,
            description: errorData.description.message,
          });
        }
      }
    },
  });

  return (
    <>
      <Heading fontSize={"x-large"} mb={8}>
        Exportar Formulários
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <VStack justify={"start"} align={"start"} maxW={"300px"} gap={4}>
          <FormControl>
            <FormLabel>Selecione um formato de exportação</FormLabel>
            <Select
              id="format"
              name="format"
              placeholder="Selecione o formato do arquivo"
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
      <Alert status="warning" mt={4}>
        <AlertIcon />
        <Box>
          <AlertTitle>
            Algumas aplicações como Exel não reconhecem a virgula ( , ) como
            separador do csv.
          </AlertTitle>
          <AlertDescription>
            Abra o arquivo preferencialmente no Libre Office
          </AlertDescription>
        </Box>
      </Alert>
    </>
  );
};
