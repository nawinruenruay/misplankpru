import { ActionIcon, ActionIconProps, rem } from "@mantine/core";
import { Icon123 } from "@tabler/icons-react";

type Props = { icon?: React.ReactNode; iconSize?: number } & ActionIconProps &
  React.ComponentPropsWithoutRef<"button">;

export const ButtonAction = ({ icon, iconSize, ...others }: Props) => {
  return (
    <ActionIcon {...others}>
      {icon || <Icon123 size={iconSize || rem(16)} />}
    </ActionIcon>
  );
};
