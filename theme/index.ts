import { ColorSchemeName } from "react-native";

import { darkColors, lightColors } from "./colors";

const defaultTheme = {} as const;

export const getTheme = (theme: ColorSchemeName = "light") =>
  ({
    ...defaultTheme,
    colors: theme === "light" ? lightColors : darkColors,
  }) as const;
