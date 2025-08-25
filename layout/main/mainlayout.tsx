"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck, IconPower } from "@tabler/icons-react";
import {
  AppShell,
  Box,
  Container,
  NavLink,
  ScrollArea,
  ThemeIcon,
  Text,
} from "@mantine/core";
import {
  useDisclosure,
  useWindowScroll,
  useNetwork,
  usePrevious,
} from "@mantine/hooks";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import classnavbar from "./navbar/navbar.module.css";
import classheader from "./header/header.module.css";
import { modals } from "@mantine/modals";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const network = useNetwork();
  const [{ y }] = useWindowScroll();
  const isScrolled = y > 0;
  const prevNetworkStatus = usePrevious(network.online);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  useEffect(() => {
    if (
      prevNetworkStatus !== undefined &&
      prevNetworkStatus !== network.online
    ) {
      if (!network.online) {
        notifications.show({
          title: "ไม่มีการเชื่อมต่ออินเทอร์เน็ต",
          message: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ",
          color: "red",
          autoClose: 5000,
          icon: <IconX />,
        });
      } else {
        notifications.show({
          title: "เชื่อมต่ออินเทอร์เน็ตสำเร็จ",
          message: "คุณกลับมาออนไลน์แล้ว",
          color: "green",
          autoClose: 5000,
          icon: <IconCheck />,
        });
      }
    }
  }, [network.online, prevNetworkStatus]);

  const confirmLogout = () =>
    modals.openConfirmModal({
      title: "คุณต้องการออกจากระบบ ?",
      children: <Text size="sm">You want to log out.</Text>,
      withCloseButton: false,
      centered: true,
      confirmProps: { color: "red" },
      labels: { confirm: "ตกลง", cancel: "ยกเลิก" },
      transitionProps: {
        transition: "pop",
      },
      onConfirm: () => {
        console.log("logout");
      },
    });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened },
      }}
      padding="md"
    >
      <AppShell.Header
        className={clsx(classheader.root, {
          [classheader.scrolled]: isScrolled,
        })}
      >
        <Header openedMobile={mobileOpened} toggleMobile={toggleMobile} />
      </AppShell.Header>
      <AppShell.Navbar className={classnavbar.Navbar}>
        <AppShell.Section p={"md"} component={ScrollArea} grow>
          <Navbar toggleMobile={toggleMobile} />
        </AppShell.Section>
        <AppShell.Section
          py={10}
          px={15}
          style={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "var(--mantine-color-body)",
            borderTop:
              "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
          }}
        >
          <NavLink
            label={"ออกจากระบบ"}
            variant={"light"}
            c={"red"}
            onClick={confirmLogout}
            className={classnavbar.nav}
            leftSection={
              <ThemeIcon variant="light" color="red" size={25}>
                <IconPower size={20} />
              </ThemeIcon>
            }
          />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container pt={10} fluid p={{ base: "0px", sm: 5, md: 10, lg: 15 }}>
          <Box pos="relative">{children}</Box>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
