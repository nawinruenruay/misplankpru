  "use client";

  import React from "react";
  import { TextInput, Select, Grid, Textarea, Checkbox, Stack  } from "@mantine/core";
  import { DatePickerInput } from "@mantine/dates";
  import { UseFormReturnType } from "@mantine/form";

  interface Step2Props {
    form: UseFormReturnType<any>;
  }

  export const Step2: React.FC<Step2Props> = ({ form }) => {
    return (
      <div className="space-y-4">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Textarea
              label="หลักการและเหตุผผล"
              placeholder="ระบุหลักการและเหตุผผล"  
              autosize
              minRows={5}
              maxRows={5}
              {...form.getInputProps("principles")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Textarea
              label="วัตถุประสงค์"
              placeholder="ระบุวัตถุประสงค์"
              autosize
              minRows={5}
              maxRows={5}
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Textarea
              label="ผลผลิต"
              placeholder="ระบุผลผลิต"  
              autosize
              minRows={5}
              maxRows={5}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Textarea
              label="ผลลัพธ์"
              placeholder="ระบุผลลัพธ์"
              autosize
              minRows={5}
              maxRows={5}
            />
          </Grid.Col>
        </Grid>

        <Checkbox.Group
          label="สอดคล้องค่านิยม"
        >
          <Stack mt="xs" pt="xs" gap={5} className="border border-gray-300 rund p-3 rounded-md">
            <Checkbox value="1" label="K – Knowledge : สร้างสรรค์ความรู้ใหม่" />
            <Checkbox value="2" label="P – Public Service and Productivity : ให้บริการชุมชน สังคมและมีผลิตภาพที่ดี" />
            <Checkbox value="3" label="R – Responsibility : ยึดถือความรับผิดชอบต่อหน้าที่" />
            <Checkbox value="4" label="U – Unity : มีความรัก สามัคคีในองค์กร" />
          </Stack>

          <Stack mt="xs" pt="xs" gap={5} className="border border-gray-300 rund p-3 rounded-md" >
            <Checkbox value="5" label="1 , สอดคล้องกับอัตลักษณ์ : บัณฑิตมีจิตอาสา สร้างสรรค์ปัญญา พัฒนาท้องถิ่น " />
            <Checkbox value="6" label="2 , สอดคล้องเอกลักษณ์ : การผลิตบัณฑิตนักเรียนรู้ พัฒนาครู และพัฒนาท้องถิ่น" />
          </Stack>
          
          <Stack mt="xs" pt="xs" gap={5} className="border border-gray-300 rund p-3 rounded-md">
            <Checkbox value="7" label="11 , การบูรณาการงานบริการวิชาการ กับการเรียนการสอน" />
            <Checkbox value="8" label="12 , การบูรณาการงานบริการวิชาการ กับงานวิจัย" />
            <Checkbox value="9" label="21 , การบูรณาการงานศิลปวัฒนธรรม กับการเรียนการสอน" />
            <Checkbox value="10" label="22 , การบูรณาการงานศิลปวัฒนธรรม กับกิจกรรมนักศึกษา" />
          </Stack>
        </Checkbox.Group>

        <TextInput
          label="ชื่อหน่วยงานภายใน หรือ โปรแกรมวิชาทีรับผิดชอบโครงการ"
          placeholder="ระบุชื่อหน่วยงานภายใน หรือ โปรแกรมวิชาทีรับผิดชอบโครงการ"
        />

        <TextInput
          label="ผู้เห็นชอบโครงการ"
          placeholder="ระบุผู้เห็นชอบโครงการ"
        />
      </div>
    );
  };
