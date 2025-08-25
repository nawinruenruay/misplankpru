"use client";

import React from "react";
import { TextInput, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";

interface TimelineStepProps {
  form: UseFormReturnType<any>;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <DatePickerInput
        label="วันที่เริ่มโครงการ"
        placeholder="เลือกวันที่เริ่มโครงการ"
        {...form.getInputProps("startDate")}
        required
      />

      <DatePickerInput
        label="วันที่สิ้นสุดโครงการ"
        placeholder="เลือกวันที่สิ้นสุดโครงการ"
        {...form.getInputProps("endDate")}
        required
      />

      <TextInput
        label="ผู้รับผิดชอบโครงการ"
        placeholder="กรอกชื่อผู้รับผิดชอบ"
        {...form.getInputProps("projectManager")}
        required
      />

      <Select
        label="สถานะโครงการ"
        placeholder="เลือกสถานะ"
        data={[
          { value: "planning", label: "วางแผน" },
          { value: "in-progress", label: "ดำเนินการ" },
          { value: "completed", label: "เสร็จสิ้น" },
          { value: "on-hold", label: "ระงับชั่วคราว" },
        ]}
        {...form.getInputProps("projectStatus")}
        required
      />
    </div>
  );
};
