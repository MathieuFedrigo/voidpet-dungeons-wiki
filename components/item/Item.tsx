import { Text, View } from "react-native";

import { ITEMS_CONFIG } from "./item.config";
import { Item } from "./item.type";

type Props = { item: Item };

const ItemComponent = ({ item }: Props) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export const ItemById = (id: Item["id"]) => (
  <ItemComponent item={ITEMS_CONFIG[id]} />
);
