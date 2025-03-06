/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { VividCardById } from "@/components/vivid/VividCard";

export default function VividsScreen() {
  return (
    <Container>
      <VividCardById id="Phantom" />
    </Container>
  );
}

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.vividBackground,
}));
