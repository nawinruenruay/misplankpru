import { FormStep } from "@/types/form";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import {
  Step1Validation,
  Step2Validation,
  Step3Validation,
} from "./validations";

export const projectFormSteps: FormStep[] = [
  {
    id: "Step1",
    component: Step1,
    validate: Step1Validation,
  },
  {
    id: "Step2",
    component: Step2,
    validate: Step2Validation,
  },
    {
    id: "Step3",
    component: Step3,
    validate: Step3Validation,
  },
];
