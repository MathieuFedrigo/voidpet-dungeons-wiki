/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getBossIdsThatDropItem } from "@/components/boss/boss.config";
import { BossCardById } from "@/components/boss/BossCard";
import { ItemId } from "@/components/item/item.type";
import { ItemById } from "@/components/item/ItemCard";
import { Spacer } from "@/components/ui/Spacer";

export default function SpecificItemScreen() {
  const { itemId } = useLocalSearchParams<{ itemId: ItemId }>();
  return (
    <Container>
      <ItemById id={itemId} disabled />
      <DropsFromText>DROPS FROM:</DropsFromText>
      <FlatList
        data={getBossIdsThatDropItem(itemId)}
        renderItem={({ item }) => <BossCardById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
        ListFooterComponent={<Spacer vertical={64} />}
      />
    </Container>
  );
}

export const Separator = styled.View({ height: 16 });

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
