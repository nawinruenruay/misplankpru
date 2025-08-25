"use client";

import {
  Burger,
  Group,
  Text,
  Flex,
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./header.module.css";

interface HeaderProps {
  openedMobile: boolean;
  toggleMobile: () => void;
}

export default function Header({ openedMobile, toggleMobile }: HeaderProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <>
      <div className={classes.header}>
        <Group gap={"xs"}>
          <Burger
            opened={openedMobile}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Flex gap={10} visibleFrom={"xs"} align={"center"}>
            <Text size="md" fw={600}>
              growbudget
            </Text>
          </Flex>
        </Group>
        <Group gap={20}>
          <Group gap={10}>
            {/* <Avatar size="45" radius="xl" color="blue" variant="light" /> */}

            <Flex direction="column" wrap="wrap">
              <Text size={"sm"} fw={500}>
                Nawin
              </Text>
              <Text c={"red"} size={"xs"} fw={500}>
                Super Administrator
              </Text>
            </Flex>
          </Group>

          <Tooltip
            label={`โหมด${
              computedColorScheme === "light" ? "กลางคืน" : "กลางวัน"
            } `}
            position="bottom-end"
            arrowPosition="center"
            withArrow
          >
            <ActionIcon
              // visibleFrom={"xs"}
              variant={"default"}
              size={"35px"}
              aria-label="Toggle color scheme"
              radius={"md"}
              color={computedColorScheme === "light" ? "black" : "white"}
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
            >
              <IconSun
                className={cx(classes.icon, classes.light)}
                stroke={1.5}
              />
              <IconMoon
                className={cx(classes.icon, classes.dark)}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
        </Group>
      </div>
    </>
  );
}
