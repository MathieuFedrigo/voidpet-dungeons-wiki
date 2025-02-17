import styled from "@emotion/native";
import { type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  return <StyledView style={style} {...otherProps} />;
}

const StyledView = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.background,
}));
