/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "@/hooks/useColorScheme";
import { getTheme } from "@/theme";
import { lightColors } from "@/theme/colors";

export function useThemeColor(colorName: keyof typeof lightColors) {
  const theme = useColorScheme() ?? "light";

  return getTheme(theme).colors[colorName];
}
