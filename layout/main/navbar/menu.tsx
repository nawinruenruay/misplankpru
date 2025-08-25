import {
  IconFileText,
  IconFileDollar,
  IconFilePlus,
  IconUserDollar,
  IconClipboardList,
  IconCashBanknote,
} from "@tabler/icons-react";
import { ThemeIcon } from "@mantine/core";
import { PATH_PROJECT } from "@/routes";

export interface MenuItem {
  title: string;
  path?: string;
  icon?: (active: boolean) => React.ReactNode;
  sub?: Submenu[];
  disabled?: boolean;
  divider?: boolean;
}

interface Submenu {
  title: string;
  path?: string;
  icon?: (active: boolean) => React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

const Icon = (Icon: React.ElementType) => (active: boolean) =>
  (
    <ThemeIcon variant={active ? "subtle" : "light"} size={27}>
      <Icon size={20} />
    </ThemeIcon>
  );

export const menu1: MenuItem[] = [
  {
    title: "บันทึกการซื้อจ้าง",
    disabled: false,
    icon: Icon(IconFileText),

    sub: [
      {
        title: "การบันทึก Form PS1",
        path: "/home",
      },
      {
        title: "การบันทึก Form PS1 (ครุภัณฑ์)",
        path: "/about",
      },
    ],
  },
  {
    title: "ทำใบสั่งซื้อจ้าง (บส.01)",
    disabled: false,
    icon: Icon(IconFileDollar),
    sub: [
      {
        title: "ใบสั่งซื้อจ้าง GFMIS (บส.01)",
        path: "#",
      },
    ],
  },
  {
    title: "บันทึกใบขอเบิก",
    disabled: false,
    icon: Icon(IconFilePlus),
    sub: [
      {
        title: "ใบ กง.1 (จากการซื้อ/จ้าง)",
        path: "#",
      },
      {
        title: "ใบ กง.2 (เบิกค่าตอบแทน/ค่าใช้สอย)",
        path: "#",
      },
      {
        title: "ใบ กง.3 (เบิกค่าใช้จ่ายไปราชการ)",
        path: "#",
      },
      {
        title: "ใบ กง.6",
        path: "#",
        disabled: true,
      },
      {
        title: "ใบ งบหน้าใบสำคัญเบิกเงิน",
        path: "#",
      },
      {
        title: "บันทึกการขอส่ง ฏีกา",
        path: "#",
      },
      {
        title: "ใบ ยืมเงิน (ทดลองราชการ)",
        path: "#",
        divider: true,
      },
      {
        title: "รายการจ่ายเงิน (เช็ค/เงินสด)",
        path: "#",
      },
      {
        title: "รายงานการคืนเงินยืม",
        path: "#",
      },
    ],
  },
  {
    title: "บันทึกข้อมูลผู้ขาย",
    disabled: false,
    icon: Icon(IconUserDollar),
    sub: [
      {
        title: "บันทึกประวัติผู้ขาย",
        path: "#",
      },
    ],
  },
  {
    title: "บันทึกโครงการ",
    icon: Icon(IconClipboardList),
    sub: [
      {
        title: "บันทึกโครงการ (2569)",
        path: PATH_PROJECT.record,
      },
      {
        title: "รายงานสรุปโครงการ (2569)",
        path: PATH_PROJECT.reportproject,
      },
      {
        title: "บันทึกเอกสารสะสมงาน",
        path: PATH_PROJECT.recorddoc,
        disabled: true,
      },
      {
        title: "บันทึกผลการดำเนินงาน (2568)",
        path: PATH_PROJECT.recordresult,
      },
      {
        title: "รายงานสรุปผลดำเนินงาน (2568)",
        path: PATH_PROJECT.reportsummary,
      },
    ],
  },
  {
    title: "สินทรัพย์",
    icon: Icon(IconCashBanknote),
    sub: [
      {
        title: "บันทึกรับวัสดุ (สิ้นเปลือง)",
        path: "#",
      },
      {
        title: "บันทึกเบิกวัสดุ (สิ้นเปลือง)",
        path: "#",
      },
      {
        title: "บันทึกวัสดุคงเหลือประจำปี (สิ้นเปลือง)",
        path: "#",
        divider: true,
      },
      {
        title: "ลงทะเบียนวัสดุคงทน",
        path: "#",
      },
      {
        title: "แสดง/แก้ไขทะเบียนวัสดุคงทน",
        path: "#",
      },
      {
        title: "บันทึกการเบิกวัสดุคงทน",
        path: "#",
      },
      {
        title: "บันทึกการโอนย้ายวัสดุคงทน",
        path: "#",
      },
      {
        title: "บันทึกการแทงจำหน่ายวัสดุคงทน",
        path: "#",
      },
      {
        title: "บันทึกการแทงจำหน่ายวัสดุคงทน",
        path: "#",
        divider: true,
      },
      {
        title: "บันทึกรายงานครุภัณฑ์ประจำปี",
        path: "#",
        divider: true,
      },
      {
        title: "รางานทะเบียนวัสดุคงทน",
        path: "#",
      },
      {
        title: "รายงานการเบิกวัสดุคงทน",
        path: "#",
      },
      {
        title: "รายงานการโอนย้ายวัสดุคงทน",
        path: "#",
      },
      {
        title: "รายงานการแทงจำหน่ายวัสดุคงทน",
        path: "#",
      },
      {
        title: "รายงานวัสดุคงเหลือประจำปี",
        path: "#",
      },
    ],
  },
];

const Menudata = {
  menu1,
};

export default Menudata;
