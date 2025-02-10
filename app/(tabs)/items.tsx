import { ScrollView } from "react-native";

import { ItemById } from "@/components/item/Item";

export default function ItemsScreen() {
  return (
    <ScrollView>
      <ItemById id="retroPinkFlowerCollar" />
    </ScrollView>
  );
}
