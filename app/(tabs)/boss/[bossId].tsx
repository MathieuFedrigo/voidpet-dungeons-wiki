/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { getBoss } from "@/components/boss/boss.config";
import { BossId } from "@/components/boss/boss.type";
import { BossCardById } from "@/components/boss/BossCard";
import { getItem } from "@/components/item/item.config";

export default function SpecificBossScreen() {
  const { bossId } = useLocalSearchParams<{ bossId: BossId }>();
  return (
    <Container>
      <BossCardById id={bossId} disabled />
      <DropsFromText>DROPS:</DropsFromText>
      <BossesText>
        {getBoss(bossId)
          .drops.map((itemId) => getItem(itemId).name)
          .join(", ")}
      </BossesText>
    </Container>
  );
}

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.bossBackground,
}));

const DropsFromText = styled.Text(({ theme }) => ({
  margin: 16,
  fontSize: 16,
  color: theme.colors.voidpet.basic.lightText,
  alignSelf: "center",
  fontWeight: "600",
}));

const BossesText = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.voidpet.basic.lightText,
  alignSelf: "center",
}));
