"use client";

import { Table } from "@mantine/core";

export default function page() {
  return (
    <>
      <Table highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta={"center"} w={10}>
              ลำดับ
            </Table.Th>
            <Table.Th ta={"center"}>ชื่อ - สกุล</Table.Th>
            <Table.Th ta={"center"}>การศึกษา</Table.Th>
            <Table.Th ta={"center"}>อาชีพ</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody ta={"center"}>
          <Table.Tr>
            <Table.Td>1</Table.Td>
            <Table.Td>asdass</Table.Td>
            <Table.Td>asdass</Table.Td>
            <Table.Td>asdass</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>2</Table.Td>
            <Table.Td>asdass</Table.Td>
            <Table.Td>asdass</Table.Td>
            <Table.Td>asdass</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
}
