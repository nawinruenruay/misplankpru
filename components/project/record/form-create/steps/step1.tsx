"use client";

import React from "react";
import { TextInput, Select, Grid, Checkbox ,Stack } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface Step1Props {
  form: UseFormReturnType<any>;
}

export const Step1: React.FC<Step1Props> = ({ form }) => {
  return (
    <div className="space-y-4">
      <Select
        allowDeselect={false}
        clearable
        checkIconPosition="right"
        label="แผนงาน"
        placeholder="เลือกแผนงาน"
        data={[
          { value: "development", label: "โครงการพัฒนา" },
          { value: "maintenance", label: "โครงการบำรุงรักษา" },
          { value: "research", label: "โครงการวิจัย" },
          { value: "other", label: "อื่นๆ" },
        ]}
        {...form.getInputProps("plan")}
        required
      />
      
      <Select
        allowDeselect={false}
        clearable
        checkIconPosition="right"
        label="ผลผลิต"
        placeholder="เลือกผลผลิต"
        data={[
          { value: "development", label: "โครงการพัฒนา" },
          { value: "maintenance", label: "โครงการบำรุงรักษา" },
          { value: "research", label: "โครงการวิจัย" },
          { value: "other", label: "อื่นๆ" },
        ]}
      />

      <Select
        allowDeselect={false}
        clearable
        checkIconPosition="right"
        label="งาน (มหาวิทยาลัย)"
        placeholder="เลือกประเภทโครงการ"
        data={[
          { value: "development", label: "โครงการพัฒนา" },
          { value: "maintenance", label: "โครงการบำรุงรักษา" },
          { value: "research", label: "โครงการวิจัย" },
          { value: "other", label: "อื่นๆ" },
        ]}
      />

      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Select
            allowDeselect={false}
            clearable
            checkIconPosition="right"
            label="สถานภาพ"
            placeholder="เลือกสถานภาพ"
            data={[
              { value: "development", label: "โครงการพัฒนา" },
              { value: "maintenance", label: "โครงการบำรุงรักษา" },
              { value: "research", label: "โครงการวิจัย" },
              { value: "other", label: "อื่นๆ" },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Select
            allowDeselect={false}
            clearable
            checkIconPosition="right"
            label="ประเภท"
            placeholder="เลือกประเภท"
            data={[
              { value: "development", label: "โครงการพัฒนา" },
              { value: "maintenance", label: "โครงการบำรุงรักษา" },
              { value: "research", label: "โครงการวิจัย" },
              { value: "other", label: "อื่นๆ" },
            ]}
          />
        </Grid.Col>
      </Grid>
      
      <TextInput
        label="ชื่องาน / โครงการ"
        placeholder="ระบุชื่องานหรือโครงการ"
      />

      <Grid>
        <Grid.Col span={{base: 12, sm: 6}}>
          <TextInput
            label="ชื่องาน / โครงการ"
            placeholder="ระบุชื่องานหรือโครงการ"
          />
        </Grid.Col>

        <Grid.Col span={{base: 12, sm: 6}}>
          <TextInput
            label="ชื่องาน / โครงการ"
            placeholder="ระบุชื่องานหรือโครงการ"
          />
        </Grid.Col>
      </Grid>

      <Select
        allowDeselect={false}
        clearable
        checkIconPosition="right"
        label="ประเด็นยุทธศาสตร์"
        placeholder="เลือกประเด็นยุทธศาสตร์"
        data={[
          { value: "development", label: "โครงการพัฒนา" },
          { value: "maintenance", label: "โครงการบำรุงรักษา" },
          { value: "research", label: "โครงการวิจัย" },
          { value: "other", label: "อื่นๆ" },
        ]}
      />

      <Select
        allowDeselect={false}
        clearable
        checkIconPosition="right"
        label="กลยุทธ์"
        placeholder="เลือกกลยุทธ์"
        data={[
          { value: "development", label: "โครงการพัฒนา" },
          { value: "maintenance", label: "โครงการบำรุงรักษา" },
          { value: "research", label: "โครงการวิจัย" },
          { value: "other", label: "อื่นๆ" },
        ]}
      />

      <Select
        allowDeselect={false}
        clearable
        checkIconPosition="right"
        label="แนวทาง/มาตราการจัดสรร งปม."
        placeholder="เลือกแนวทาง/มาตราการจัดสรร งปม."
        data={[
          { value: "development", label: "โครงการพัฒนา" },
          { value: "maintenance", label: "โครงการบำรุงรักษา" },
          { value: "research", label: "โครงการวิจัย" },
          { value: "other", label: "อื่นๆ" },
        ]}
      />

    <Checkbox.Group
      label="ตัวชี้วัดมหาวิทยาลัย"
    >
      <Stack mt="xs" gap={5} className="border border-gray-300 rund p-3 rounded-md">
        <Checkbox value="1" label="010101, 1. จำนวนชุมชนี่ใช้ประโยนช์จากผลงานวิจัยพัฒนาเทคโนโลยีและนวัตกรรมที่เกิดจากการบูรณาการพัธกิจ" />
        <Checkbox value="2" label="แนวทาง/มาตราการจัดสรร งปม." />
        <Checkbox value="3" label="010101, 1. จำนวนชุมชนี่ใช้ประโยนช์จากผลงานวิจัยพัฒนาเทคโนโลยีและนวัตกรรมที่เกิดจากการบูรณาการพัธกิจ" />
      </Stack>
    </Checkbox.Group>
    </div>
  );
};
