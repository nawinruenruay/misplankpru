"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { FormStepContextType, MultiStepFormConfig } from "@/types/form";
import { IconAlertCircle, IconCheck } from "@tabler/icons-react";

const FormStepContext = createContext<FormStepContextType | null>(null);

export const useFormStep = () => {
  const context = useContext(FormStepContext);
  if (!context) {
    throw new Error("useFormStep must be used within FormStepProvider");
  }
  return context;
};

interface FormStepProviderProps {
  config: MultiStepFormConfig;
  children: React.ReactNode;
}

export const FormStepProvider: React.FC<FormStepProviderProps> = ({
  config,
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // รวม validation จากทุก steps
  const createValidationObject = () => {
    const validation: Record<string, (value: any) => string | null> = {};

    config.steps.forEach((step) => {
      if (step.validate) {
        Object.assign(validation, step.validate);
      }
    });

    return validation;
  };

  const form = useForm({
    initialValues: config.initialValues,
    validate: createValidationObject(),
  });

  const validateCurrentStep = useCallback(() => {
    const currentStepConfig = config.steps[currentStep];
    const currentStepFields = Object.keys(currentStepConfig.validate || {});

    // Validate เฉพาะ fields ใน step ปัจจุบัน
    let hasErrors = false;
    currentStepFields.forEach((field) => {
      const error = form.validateField(field).error;
      if (error) hasErrors = true;
    });
    return !hasErrors;
  }, [currentStep, config.steps, form]);

  const goToNext = useCallback(() => {
    if (validateCurrentStep()) {
      if (currentStep < config.steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      //   notifications.show({
      //     title: "ข้อผิดพลาด",
      //     message: "กรุณากรอกข้อมูลให้ครบถ้วน",
      //     color: "red",
      //   });
    }
  }, [currentStep, config.steps.length, validateCurrentStep]);

  const goToPrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < config.steps.length) {
        setCurrentStep(step);
      }
    },
    [config.steps.length]
  );

  const submitForm = useCallback(async () => {
    // Validate ทั้งหมดก่อน submit
    const validationResult = form.validate();
    if (validationResult.hasErrors) {
      notifications.show({
        title: "ข้อผิดพลาด",
        message: "กรุณากรอกข้อมูลให้ครบถ้วน",
        color: "red",
        icon: <IconAlertCircle size={16} />,
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      if (config.onSubmit) {
        await config.onSubmit(form.values);
      }
      notifications.show({
        title: "สำเร็จ",
        message: "บันทึกข้อมูลเรียบร้อยแล้ว",
        color: "green",
        icon: <IconCheck size={16} />,
        autoClose: 3000,
      });
    } catch (err) {
      notifications.show({
        title: "ข้อผิดพลาด",
        message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
        color: "red",
        icon: <IconAlertCircle size={16} />,
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [config.onSubmit, form]);

  const contextValue: FormStepContextType = {
    currentStep,
    totalSteps: config.steps.length,
    form,
    isSubmitting,
    goToNext,
    goToPrevious,
    goToStep,
    validateCurrentStep,
    submitForm,
  };

  return (
    <FormStepContext.Provider value={contextValue}>
      {children}
    </FormStepContext.Provider>
  );
};
