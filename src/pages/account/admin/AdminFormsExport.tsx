import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCustomToastError } from "../../../hooks/useCustomToastError";
import { exportAllByDate } from "../../../services/formService";
import { getManyUsersByIds } from "../../../services/userService";
import { columns } from "./columns";

export const AdminFormsExport: React.FC = () => {
  const toast = useToast();
  const customToast = useCustomToastError();
  const [data, setData] = useState([]);

  const { register, handleSubmit } = useForm({
    values: {
      startDate: DateTime.now().minus({ days: 15 }).toISODate(),
      endDate: DateTime.now().plus({ days: 15 }).toISODate(),
    },
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  async function onSubmit(data: any) {
    try {
      const forms =
        (await exportAllByDate({
          startDate: data.startDate,
          endDate: data.endDate,
        })) ?? [];

      const users = await getManyUsersByIds(
        forms.map((form: any) => form.userId)
      );

      for (const key in forms) {
        forms[key].email =
          users.find((user: any) => user.id === forms[key].userId)?.email ??
          "Não encontrado";
      }

      console.log(forms, users);

      toast({
        title: "Busca efetuada com sucesso",
        status: "success",
        isClosable: true,
      });
      setData(forms);
    } catch (error) {
      customToast(error);
    }
  }

  return (
    <VStack justify={"start"} align={"start"}>
      <Box mb={8} mt={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack gap={4} mb={4}>
            <FormControl>
              <FormLabel>De (Data Inicial)</FormLabel>
              <Input type="date" {...register("startDate")} />
            </FormControl>
            <FormControl>
              <FormLabel>Até (Data Final)</FormLabel>
              <Input type="date" {...register("endDate")} />
            </FormControl>
          </HStack>

          <FormControl>
            <Button type="submit">Buscar</Button>
          </FormControl>
        </form>
      </Box>

      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                const meta: any = cell.column.columnDef.meta;
                return (
                  <Td key={cell.id} isNumeric={meta?.isNumeric}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};
