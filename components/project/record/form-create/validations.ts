// Validation functions สำหรับ Mantine useForm
export const basicInfoValidation = {
  projectName: (value: string) =>
    !value || value.trim() === "" ? "กรุณากรอกชื่อโครงการ" : null,

  projectDescription: (value: string) =>
    !value || value.trim() === "" ? "กรุณากรอกรายละเอียดโครงการ" : null,

  projectType: (value: string) => (!value ? "กรุณาเลือกประเภทโครงการ" : null),

  budget: (value: number) =>
    !value || value <= 0 ? "กรุณากรอกงบประมาณที่ถูกต้อง" : null,
};

export const timelineValidation = {
  startDate: (value: string) =>
    !value ? "กรุณาเลือกวันที่เริ่มโครงการ" : null,

  endDate: (value: string) =>
    !value ? "กรุณาเลือกวันที่สิ้นสุดโครงการ" : null,

  projectManager: (value: string) =>
    !value || value.trim() === "" ? "กรุณากรอกผู้รับผิดชอบโครงการ" : null,

  projectStatus: (value: string) => (!value ? "กรุณาเลือกสถานะโครงการ" : null),
};

export const additionalInfoValidation = {
  projectObjectives: (value: string) =>
    !value || value.trim() === "" ? "กรุณากรอกวัตถุประสงค์โครงการ" : null,

  expectedOutcomes: (value: string) =>
    !value || value.trim() === "" ? "กรุณากรอกผลลัพธ์ที่คาดหวัง" : null,
};
