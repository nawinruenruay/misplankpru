"use client";

import Link from "next/link";
import { Flex, NavLink, Box, Divider } from "@mantine/core";
import { usePathname } from "next/navigation";
import { MenuItem } from "./menu";
import Menudata from "./menu";
import classes from "./navbar.module.css";

interface NavbarProps {
  toggleMobile: () => void;
}

export default function Navbar({ toggleMobile }: NavbarProps) {
  const pathname = usePathname();
  const handleNavClick = (path: string) => {
    if (path !== pathname) {
      toggleMobile();
    }
  };

  const renderMenu = (
    items: MenuItem[],
    basePath: string = ""
  ): React.ReactNode[] =>
    items.map(({ title, path, icon, sub, disabled, divider }, key) => {
      const fullPath = basePath + path;
      const isActive = fullPath === pathname;
      const hasActiveSubmenu = Boolean(
        sub?.some(({ path }) => path === pathname)
      );

      const node = sub ? (
        <NavLink
          key={key}
          label={title}
          className={classes.nav}
          leftSection={icon?.(hasActiveSubmenu)}
          active={hasActiveSubmenu}
          disabled={disabled}
        >
          <Flex direction="column" className={classes.sub} mt={4} mb={4}>
            {renderMenu(sub)}
          </Flex>
        </NavLink>
      ) : (
        <NavLink
          key={key}
          component={Link}
          href={fullPath}
          label={title}
          className={classes.nav}
          leftSection={icon?.(isActive)}
          active={isActive}
          onClick={(e) => {
            if (fullPath === pathname) {
              e.preventDefault();
              e.nativeEvent.stopImmediatePropagation();
            }
            handleNavClick(fullPath);
          }}
          disabled={disabled}
        />
      );

      return divider
        ? [node, <Divider key={`div-${key}`} my={5} mx={10} variant="dashed" />]
        : [node];
    });

  return (
    <Flex
      direction="column"
      style={{
        position: "relative",
        minHeight: "100%",
      }}
    >
      <Box style={{ flex: 1 }}>{renderMenu(Menudata.menu1)}</Box>
    </Flex>
  );
}
