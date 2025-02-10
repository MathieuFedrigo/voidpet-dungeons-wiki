import { ScrollView } from "react-native";

import { ItemById } from "@/components/item/Item";
import { ITEM_IDS } from "@/components/item/item.type";

export default function ItemsScreen() {
  return (
    <ScrollView>
      {ITEM_IDS.map((id) => (
        <ItemById key={id} id={id} />
      ))}
    </ScrollView>
  );
}
