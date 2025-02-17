/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ItemById } from "@/components/item/Item";
import { ItemId } from "@/components/item/item.type";

export default function SpecificItemScreen() {
  const { itemId } = useLocalSearchParams<{ itemId: ItemId }>();
  return (
    <Container>
      <ItemById id={itemId} disabled />
    </Container>
  );
}

const Container = styled(SafeAreaView)({
  flex: 1,
  marginTop: 12,
});
