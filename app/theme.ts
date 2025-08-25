import { createTheme, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = createTheme({
  primaryColor: "blue",

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  defaultRadius: "0.5rem",
  activeClassName: "activeTheme",
  cursorType: "pointer",

  fontFamily: "Kanit, sans-serif",
});
