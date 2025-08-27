"use client";

import React from "react";
import { TextInput, Textarea, Select, NumberInput, Grid } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface BasicInfoStepProps {
  form: UseFormReturnType<any>;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ form }) => {
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
        {...form.getInputProps("projectType")}
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
        {...form.getInputProps("projectType")}
        required
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
        {...form.getInputProps("projectType")}
        required
      />

        <Grid>
          <Grid.Col span={6}>
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
              {...form.getInputProps("projectType")}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
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
              {...form.getInputProps("projectType")}
              required
            />
          </Grid.Col>
        </Grid>

      <Textarea
        label="รายละเอียดโครงการ"
        placeholder="กรอกรายละเอียดโครงการ"
        {...form.getInputProps("projectDescription")}
        rows={4}
        required
      />

      <Select
        allowDeselect={false}
        clearable
        checkIconPosition="right"
        label="ประเภทโครงการ"
        placeholder="เลือกประเภทโครงการ"
        data={[
          { value: "development", label: "โครงการพัฒนา" },
          { value: "maintenance", label: "โครงการบำรุงรักษา" },
          { value: "research", label: "โครงการวิจัย" },
          { value: "other", label: "อื่นๆ" },
        ]}
        {...form.getInputProps("projectType")}
        required
      />

      <NumberInput
        label="งบประมาณ (บาท)"
        placeholder="กรอกงบประมาณ"
        {...form.getInputProps("budget")}
        min={0}
        required
      />
    </div>
  );
};
