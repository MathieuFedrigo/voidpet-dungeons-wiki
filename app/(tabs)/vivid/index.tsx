/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ui/ThemedText";

export default function VividsScreen() {
  return (
    <Container>
      <ThemedText>test</ThemedText>
    </Container>
  );
}

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.bossBackground,
}));
