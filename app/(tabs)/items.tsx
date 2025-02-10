import styled from "@emotion/native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ItemById } from "@/components/item/Item";
import { ITEM_IDS } from "@/components/item/item.type";

export default function ItemsScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={ITEM_IDS}
        renderItem={({ item }) => <ItemById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
}

const Separator = styled.View({ height: 16 });
