/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ItemById } from "@/components/item/Item";
import { ITEMS_CONFIG } from "@/components/item/item.config";
import {
  ITEM_IDS,
  ITEM_RARITIES,
  ITEM_SLOTS,
  ITEM_STATS,
  ItemRarity,
  ItemSlot,
  ItemStats,
} from "@/components/item/item.type";

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
      <FilterSection>
        <FilterTitle>Filter by Rarity</FilterTitle>
        <FilterRow>
          {ITEM_RARITIES.map((rarity) => {
            const selected = selectedRarities.includes(rarity);
            return (
              <OptionButton
                key={rarity}
                selected={selected}
                onPress={() => toggleRarity(rarity)}
              >
                <OptionText>{rarity}</OptionText>
              </OptionButton>
            );
          })}
        </FilterRow>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Filter by Slot</FilterTitle>
        <FilterRow>
          {ITEM_SLOTS.map((slot) => {
            const selected = selectedSlots.includes(slot);
            return (
              <OptionButton
                key={slot}
                selected={selected}
                onPress={() => toggleSlot(slot)}
              >
                <OptionText>{slot}</OptionText>
              </OptionButton>
            );
          })}
        </FilterRow>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Filter by Stats</FilterTitle>
        <FilterRow>
          {ITEM_STATS.map((stat) => {
            const selected = filterStats.includes(stat);
            return (
              <OptionButton
                key={stat}
                selected={selected}
                onPress={() => toggleStat(stat)}
              >
                <OptionText>{stat}</OptionText>
              </OptionButton>
            );
          })}
        </FilterRow>
      </FilterSection>

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => <ItemById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
      />
    </Container>
  );
}

const Separator = styled.View({ height: 16 });

const Container = styled(SafeAreaView)({
  flex: 1,
  marginTop: 12,
});

const FilterSection = styled.View({
  marginBottom: 10,
  paddingHorizontal: 10,
});

const FilterTitle = styled.Text(({ theme }) => ({
  fontWeight: "600",
  marginBottom: 6,
  color: theme.colors.text,
}));

const FilterRow = styled.View({
  flexDirection: "row",
});

const OptionButton = styled.TouchableOpacity<{ selected?: boolean }>(
  ({ selected, theme }) => ({
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: selected
      ? theme.colors.tabIconDefault
      : theme.colors.tabIconSelected,
    marginRight: 8,
  }),
);

const OptionText = styled.Text({
  fontSize: 14,
  color: "#333",
});
