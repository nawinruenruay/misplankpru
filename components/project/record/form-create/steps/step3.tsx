"use client";

import React from "react";
import { Table, Button, Flex, Modal, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UseFormReturnType } from "@mantine/form";

interface Step3Props {
  form: UseFormReturnType<any>;
}

export const Step3: React.FC<Step3Props> = ({ form }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="space-y-4">
      {/* Label + Add button */}
      <Flex justify="space-between" align="center" mb="sm">
        <h2 className="text-lg font-semibold">Element List</h2>
        <Button size="xs" variant="filled" color="blue" onClick={open}>
          + เพิ่มรายการ
        </Button>
      </Flex>

      {/* Table */}
      <Table withTableBorder highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>1</Table.Td>
            <Table.Td>Hydrogen</Table.Td>
            <Table.Td>H</Table.Td>
            <Table.Td>1.008</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>
    </div>
  );
};
