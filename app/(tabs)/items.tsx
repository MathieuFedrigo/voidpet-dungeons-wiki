import styled from "@emotion/native";
import { FlatList } from "react-native";

import { ItemById } from "@/components/item/Item";
import { ITEM_IDS } from "@/components/item/item.type";

export default function ItemsScreen() {
  return (
    <FlatList
      data={ITEM_IDS}
      renderItem={({ item }) => <ItemById id={item} />}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item) => item}
    />
  );
}

const Separator = styled.View({ height: 16 });
