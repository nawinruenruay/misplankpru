"use client";

import { useDisclosure } from "@mantine/hooks";
import { Button } from "@/components/ui/buttons/button";
import { IconAppsFilled } from "@tabler/icons-react";

import { RecordDrawer } from "./record-drawer";

export const RecordCreate = () => {
  const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Button onClick={openDrawer} leftSection={<IconAppsFilled size={16} />}>
        บันทึกโครงการ
      </Button>
      <RecordDrawer
        title={
          <>
            <span className="text-blue-500">บันทึกโครงการ : </span>
            <span>ของมหาวิทยาลัยราชภัฏกำแพงเพชร</span>
          </>
        }
        opened={openedDrawer}
        onClose={closeDrawer}
        closeOnClickOutside={false}
        closeOnEscape={false}
        position={"right"}
        size={"60rem"}
      />
    </>
  );
};
