"use client";

import { ActionIcon, Badge, Menu, Stack } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { showNotification } from "@mantine/notifications";
import {
  IconDots,
  IconPencil,
  IconPrinter,
  IconPointFilled,
} from "@tabler/icons-react";

type Props = {};

export const RecordTable = () => {
  return (
    <>
      <DataTable
        // withTableBorder
        // withColumnBorders
        // withRowBorders
        highlightOnHover
        records={[
          {
            id: 1,
            code: 6828000001,
            name: "พัฒนาบุคลากรสำนักวิทยบริการและเทคโนโลยีสารสนเทศ",
            party: "สำนักวิทยบริการและเทคโนโลยีสารสนเทศ",
          },
          {
            id: 2,
            code: 6828000002,
            name: "พัฒนาบุคลากรสำนักวิทยบริการและเทคโนโลยีสารสนเทศ",
            party: "สำนักวิทยบริการและเทคโนโลยีสารสนเทศ",
          },
        ]}
        columns={[
          {
            accessor: "id",
            title: "ลำดับ",
            textAlign: "center",
            width: 70,
          },
          {
            accessor: "code",
            title: "รหัสโครงการ",
            textAlign: "center",
            width: 150,
          },
          {
            accessor: "name",
            title: "ชื่อโครงการ",
            textAlign: "center",
          },
          {
            accessor: "party",
            title: "หน่วยงาน",
            textAlign: "center",
          },
          {
            accessor: "status",
            title: "สถานะ",
            textAlign: "center",
            width: 150,
            render: (i) => (
              <>
                <Stack align="center">
                  <Badge
                    color={"yellow"}
                    leftSection={<IconPointFilled size={16} />}
                  >
                    รออนุมัติ
                  </Badge>
                </Stack>
              </>
            ),
          },
          {
            accessor: "manage",
            title: "จัดการ",
            textAlign: "center",
            width: 70,
            render: (i) => (
              <>
                <Stack align="center">
                  <Menu
                    withArrow
                    position="bottom-end"
                    arrowPosition="center"
                    offset={1}
                    transitionProps={{ transition: "scale-y" }}
                  >
                    <Menu.Target>
                      <ActionIcon
                        variant="subtle"
                        color="gray"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <IconDots size={24} />
                      </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        leftSection={<IconPencil size={14} />}
                      >
                        แก้ไขโครงการ
                      </Menu.Item>
                      <Menu.Item
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        leftSection={<IconPrinter size={14} />}
                      >
                        พิมพ์โครงการ
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Stack>
              </>
            ),
          },
        ]}
        onRowClick={({ record: { name, party } }) =>
          showNotification({
            title: `Clicked on ${name}`,
            message: `You clicked on ${name}, a ${party.toLowerCase()}`,
          })
        }
      />
    </>
  );
};
