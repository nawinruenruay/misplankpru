"use client";

import React from "react";
import { TextInput, Textarea, Select, NumberInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface BasicInfoStepProps {
  form: UseFormReturnType<any>;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <TextInput
        label="ชื่อโครงการ"
        placeholder="กรอกชื่อโครงการ"
        {...form.getInputProps("projectName")}
        required
      />

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
