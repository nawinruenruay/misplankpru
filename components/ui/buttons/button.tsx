import {
  Button as ButtonMantine,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";

type ButtonsProps = MantineButtonProps &
  React.ComponentPropsWithoutRef<"button">;

export const Button = (props: ButtonsProps) => {
  return (
    <ButtonMantine variant="filled" {...props}>
      {props.children || "Button"}
    </ButtonMantine>
  );
};
