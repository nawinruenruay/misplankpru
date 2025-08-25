import { Title, TitleProps } from "@mantine/core";

type TitlesProps = TitleProps;

export const Heading = ({ ...others }: TitlesProps) => {
  return (
    <>
      <Title {...others}>{others.title || "Title"}</Title>
    </>
  );
};
