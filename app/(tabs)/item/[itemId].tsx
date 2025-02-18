/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { getBoss, getBossIdsThatDropItem } from "@/components/boss/boss.config";
import { ItemId } from "@/components/item/item.type";
import { ItemById } from "@/components/item/ItemCard";

export default function SpecificItemScreen() {
  const { itemId } = useLocalSearchParams<{ itemId: ItemId }>();
  return (
    <Container>
      <ItemById id={itemId} disabled />
      <DropsFromText>DROPS FROM:</DropsFromText>
      <BossesText>
        {getBossIdsThatDropItem(itemId)
          .map((bossId) => getBoss(bossId).name)
          .join(", ")}
      </BossesText>
    </Container>
  );
}

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.itemBackground,
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
