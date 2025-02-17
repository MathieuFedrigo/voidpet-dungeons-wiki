import styled from "@emotion/native";
import { type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps;

export const ThemedView = (props: ThemedViewProps) => <StyledView {...props} />;

const StyledView = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.background,
}));
