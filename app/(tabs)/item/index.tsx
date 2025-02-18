/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ITEMS_CONFIG } from "@/components/item/item.config";
import {
  ITEM_IDS,
  ItemRarity,
  ItemSlot,
  ItemStats,
} from "@/components/item/item.type";
import { ItemById } from "@/components/item/ItemCard";
import { ItemFilters } from "@/components/item/ItemFilters";

export default function ItemsScreen() {
  const [selectedRarities, setSelectedRarities] = useState<ItemRarity[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<ItemSlot[]>([]);
  const [filterStats, setFilterStats] = useState<(keyof ItemStats)[]>([]);

  const toggleRarity = (rarity: ItemRarity) => {
    setSelectedRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((r) => r !== rarity)
        : [...prev, rarity],
    );
  };

  const toggleSlot = (slot: ItemSlot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot],
    );
  };

  const toggleStat = (stat: keyof ItemStats) => {
    setFilterStats((prev) =>
      prev.includes(stat) ? prev.filter((s) => s !== stat) : [...prev, stat],
    );
  };

  const filteredItems = ITEM_IDS.filter((id) => {
    const item = ITEMS_CONFIG[id];
    if (selectedRarities.length && !selectedRarities.includes(item.rarity)) {
      return false;
    }
    if (selectedSlots.length && !selectedSlots.includes(item.slot)) {
      return false;
    }
    if (
      filterStats.length &&
      !filterStats.some((stat) => item.baseStats[stat])
    ) {
      return false;
    }
    return true;
  });

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <ItemFilters
            selectedRarities={selectedRarities}
            selectedSlots={selectedSlots}
            filterStats={filterStats}
            toggleRarity={toggleRarity}
            toggleSlot={toggleSlot}
            toggleStat={toggleStat}
          />
        }
        data={filteredItems}
        renderItem={({ item }) => <ItemById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
      />
    </Container>
  );
}

const Separator = styled.View({ height: 16 });

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.itemBackground,
}));
