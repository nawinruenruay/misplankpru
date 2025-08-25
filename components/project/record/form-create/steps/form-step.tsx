"use client";

import React from "react";
import { useFormStep } from "@/components/provider/form-step-provider";
import { FormStep as FormStepType } from "@/types/form";

interface FormStepProps {
  step: FormStepType;
}

export const FormStep: React.FC<FormStepProps> = ({ step }) => {
  const { form } = useFormStep();

  return (
    <div className="space-y-6">
      {/* <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
      </div> */}

      <step.component form={form} />
    </div>
  );
};
