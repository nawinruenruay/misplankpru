"use client";

import React from "react";
import {
  Table,
  Button,
  Flex,
  Modal,
  Dialog,
  Textarea,
  TextInput,
  Stack,
  Text,
  Group,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { UseFormReturnType } from "@mantine/form";

interface Step3Props {
  form: UseFormReturnType<any>;
}

export const Step3: React.FC<Step3Props> = ({ form }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isTablet = useMediaQuery("(max-width: 1300px)");

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

      <Dialog
        opened={opened}
        onClose={close}
        withCloseButton
        size="lg"
        radius="md"
        transitionProps={{ transition: "pop" }}
        position={isTablet ? { bottom: 0, left: 0 } : { bottom: 0, left: 200 }}
      >
        <Text size="sm" mb="xs" fw={500}>
          Title
        </Text>
        <Stack gap={5}>
          <TextInput
            label="ตัวชี้วัดความสำเร็จ"
            placeholder="ระบุตัวชี้วัดความสำเร็จ"
          />
          <TextInput label="จำนวนเป้าหมาย" placeholder="ระบุจำนวนเป้าหมาย" />
          <TextInput label="หน่วยนับ" placeholder="ระบุหน่วยนับ" />
        </Stack>
        <Group align={"center"} justify={"center"} mt={10}>
          <Button variant="outline" color="red" onClick={close}>
            ยกเลิก
          </Button>
          <Button variant="filled" color="blue" onClick={close}>
            บันทึก
          </Button>
        </Group>
      </Dialog>
    </div>
  );
};
