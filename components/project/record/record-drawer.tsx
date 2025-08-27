"use client";

import {
  Box,
  Drawer,
  DrawerProps,
  Flex,
  Group,
  ScrollArea,
} from "@mantine/core";
import { Button } from "@/components/ui/buttons/button";
import {
  IconDeviceFloppy,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import {
  FormStepProvider,
  useFormStep,
} from "@/components/provider/form-step-provider";
import { FormStep } from "@/components/project/record/form-create/steps/form-step";
import { projectFormSteps } from "@/components/project/record/form-create/config";

type Props = {
  opened: boolean;
  onClose: () => void;
  title: React.ReactNode;
} & DrawerProps;

export const RecordDrawer = ({ title, opened, onClose, ...other }: Props) => {
  const formConfig = {
    steps: projectFormSteps,
    initialValues: {
      projectName: "",
      projectDescription: "",
      projectType: "",
      budget: "",
      startDate: "",
      endDate: "",
      projectManager: "",
      projectStatus: "",
      relatedDepartment: "",
      teamMembers: [],
      projectObjectives: "",
      expectedOutcomes: "",
      notes: "",
    },
    onSubmit: async (values: any) => {
      console.log("Form submitted:", values);
      onClose();
    }
  };

  return (
    <Drawer.Root opened={opened} onClose={onClose} {...other}>
      <Drawer.Overlay />
      <Drawer.Content>
        <FormStepProvider config={formConfig}>
          <DrawerContent title={title} />
        </FormStepProvider>
      </Drawer.Content>
    </Drawer.Root>
  );
};

const DrawerContent = ({ title }: { title: React.ReactNode }) => {
  const {
    currentStep,
    totalSteps,
    goToNext,
    goToPrevious,
    submitForm,
    isSubmitting,
  } = useFormStep();

  const currentStepConfig = projectFormSteps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  const handleNext = () => {
    if (isLastStep) {
      submitForm();
    } else {
      goToNext();
    }
  };

  return (
    <Box className="flex flex-col h-screen">
      {/* HEADER */}
      <Drawer.Header 
        className="border-b border-gray-200"
        px={34}
        py={10}
      >
        <Drawer.Title>{title}</Drawer.Title>
        <Drawer.CloseButton
          children={<p className="underline text-blue-500">ปิด</p>}
          icon={true}
        />
      </Drawer.Header>

      {/* BODY */}
      <Drawer.Body 
        className="flex-1"
        px={34}
        py={10} 
        component={ScrollArea}
      >
        <FormStep step={currentStepConfig} />
      </Drawer.Body>

      {/* FOOTER */}
      <Box
        className="border-t border-gray-200"
        px={34}
        py={10}
        bg={"light-dark(white, #242424)"}
      >
        <Flex justify={"space-between"} align={"center"}>
          <span className="text-sm">
            หน้า {currentStep + 1} จาก {totalSteps} หน้า{" "}
            <span className="text-blue-500">ของ บันทึกโครงการ</span>
          </span>

          <Group gap={10}>
            {!isFirstStep ? (
              <Button
                leftSection={<IconChevronLeft size={20} />}
                variant={"light"}
                color={"dimmed"}
                disabled={isFirstStep}
                onClick={goToPrevious}
              >
                หน้าก่อนหน้า
              </Button>
            ) : (
              <></>
            )}
            <Button
              leftSection={isLastStep ? <IconDeviceFloppy size={20} /> : <></>}
              rightSection={isLastStep ? <></> : <IconChevronRight size={20} />}
              loading={isSubmitting}
              onClick={handleNext}
              color={isLastStep ? "green" : "blue"}
            >
              {isLastStep ? "บันทึก/พิมพ์" : "หน้าถัดไป"}
            </Button>
          </Group>
        </Flex>
      </Box>
    </Box>
  );
};
