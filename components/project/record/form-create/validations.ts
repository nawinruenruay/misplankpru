// Validation functions สำหรับ Mantine useForm
export const Step1Validation = {
  plan: (value: string) =>
  !value || value.trim() === "" ? "กรุณาเลือกแผนงาน" : null,
};

export const Step2Validation = {
  principles: (value: string) =>
  !value || value.trim() === "" ? "กรุณาระบุเหลักการและเหตุผผล" : null,
};

export const Step3Validation = {

};
