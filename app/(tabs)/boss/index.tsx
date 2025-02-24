/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RiveView } from "@/components/ui/RiveView";

export default function BossesScreen() {
  return (
    <Container>
      <RiveView resourceName="deathQuack" size={300} />
    </Container>
  );
}

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.bossBackground,
}));
