import { Breadcrumbs, Anchor, BreadcrumbsProps } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

type Props = {
  text: string[];
  href?: string[];
} & Omit<BreadcrumbsProps, "children">;

export const Subheading = ({ text, href = [], ...others }: Props) => {
  const items = text.map((title, index) => (
    <Anchor key={index} href={href[index] ?? "#"} c={"gray"}>
      {title}
    </Anchor>
  ));

  return (
    <Breadcrumbs separator={<IconChevronRight size={18} />} {...others}>
      {items}
    </Breadcrumbs>
  );
};
