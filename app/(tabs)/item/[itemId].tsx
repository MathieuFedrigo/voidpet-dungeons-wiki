/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ItemId } from "@/components/item/item.type";
import { ItemById } from "@/components/item/ItemCard";

export default function SpecificItemScreen() {
  const { itemId } = useLocalSearchParams<{ itemId: ItemId }>();
  return (
    <Container>
      <ItemById id={itemId} disabled />
    </Container>
  );
}

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.itemBackground,
}));
