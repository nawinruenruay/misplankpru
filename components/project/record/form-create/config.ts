import { FormStep } from "@/types/form";
import { BasicInfoStep } from "./steps/basic-info-step";
import { TimelineStep } from "./steps/timeline-step";
import { AdditionalInfoStep } from "./steps/additional-info-step";
import {
  basicInfoValidation,
  timelineValidation,
  additionalInfoValidation,
} from "./validations";

export const projectFormSteps: FormStep[] = [
  {
    id: "basic-info",
    title: "ข้อมูลพื้นฐาน",
    component: BasicInfoStep,
    validate: basicInfoValidation,
  },
  {
    id: "timeline",
    title: "ระยะเวลาและผู้รับผิดชอบ",
    component: TimelineStep,
    validate: timelineValidation,
  },
  {
    id: "additional-info",
    title: "ข้อมูลเพิ่มเติม",
    component: AdditionalInfoStep,
    validate: additionalInfoValidation,
  },
];
