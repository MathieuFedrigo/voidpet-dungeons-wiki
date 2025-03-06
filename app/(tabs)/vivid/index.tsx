/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { VOID_VIVID_NAMES } from "@/components/vivid/vivid.config";
import { VividCardById } from "@/components/vivid/VividCard";

export default function VividsScreen() {
  return (
    <Container>
      {VOID_VIVID_NAMES.map((name) => (
        <VividCardById key={name} id={name} />
      ))}
    </Container>
  );
}

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.vividBackground,
}));
