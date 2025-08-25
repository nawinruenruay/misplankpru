"use client";

import React from "react";
import { Textarea, TextInput, MultiSelect } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface AdditionalInfoStepProps {
  form: UseFormReturnType<any>;
}

export const AdditionalInfoStep: React.FC<AdditionalInfoStepProps> = ({
  form,
}) => {
  return (
    <div className="space-y-4">
      <TextInput
        label="หน่วยงานที่เกี่ยวข้อง"
        placeholder="กรอกหน่วยงานที่เกี่ยวข้อง"
        {...form.getInputProps("relatedDepartment")}
      />

      <MultiSelect
        label="ทีมงาน"
        placeholder="เลือกทีมงาน"
        data={[
          { value: "developer", label: "นักพัฒนา" },
          { value: "designer", label: "นักออกแบบ" },
          { value: "tester", label: "ผู้ทดสอบ" },
          { value: "analyst", label: "นักวิเคราะห์" },
          { value: "manager", label: "ผู้จัดการ" },
        ]}
        {...form.getInputProps("teamMembers")}
        searchable
      />

      <Textarea
        label="วัตถุประสงค์โครงการ"
        placeholder="กรอกวัตถุประสงค์ของโครงการ"
        {...form.getInputProps("projectObjectives")}
        rows={3}
      />

      <Textarea
        label="ผลลัพธ์ที่คาดหวัง"
        placeholder="กรอกผลลัพธ์ที่คาดหวัง"
        {...form.getInputProps("expectedOutcomes")}
        rows={3}
      />

      <Textarea
        label="หมายเหตุ"
        placeholder="หมายเหตุเพิ่มเติม (ถ้ามี)"
        {...form.getInputProps("notes")}
        rows={2}
      />
    </div>
  );
};
