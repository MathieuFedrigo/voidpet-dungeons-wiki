/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ui/ThemedText";

export default function SpecificItemScreen() {
  const { itemId } = useLocalSearchParams();
  return (
    <Container>
      <ThemedText>Item ID: {itemId}</ThemedText>
    </Container>
  );
}

const Container = styled(SafeAreaView)({
  flex: 1,
  marginTop: 12,
});
