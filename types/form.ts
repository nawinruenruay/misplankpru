import { UseFormReturnType } from "@mantine/form";

export interface FormStep {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  validate?: Record<string, (value: any) => string | null>;
}

export interface MultiStepFormConfig {
  steps: FormStep[];
  initialValues: Record<string, any>;
  onSubmit?: (values: any) => void | Promise<void>;
}

export interface FormStepContextType {
  currentStep: number;
  totalSteps: number;
  form: UseFormReturnType<any>;
  isSubmitting: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  goToStep: (step: number) => void;
  validateCurrentStep: () => boolean;
  submitForm: () => Promise<void>;
}
