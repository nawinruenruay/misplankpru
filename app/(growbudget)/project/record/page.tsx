import { Flex, Stack } from "@mantine/core";

import { Heading } from "@/components/ui/heading";
import { Subheading } from "@/components/ui/subheading";
import { RecordCreate } from "@/components/project/record/record-create";
import { RecordTable } from "@/components/project/record/record-table";

export default function page() {
  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        wrap={"wrap"}
        gap={20}
        mb={30}
      >
        <Stack justify="space-between">
          <Heading title={"บันทึกโครงการ"} order={3} />
          <Subheading text={["โครงการ", "บันทึกโครงการ"]} separatorMargin={5} />
        </Stack>
        <RecordCreate />
      </Flex>
      <RecordTable />
    </>
  );
}
