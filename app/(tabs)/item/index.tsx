/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ITEMS_CONFIG } from "@/components/item/item.config";
import { ITEM_IDS } from "@/components/item/item.type";
import { ItemById } from "@/components/item/ItemCard";
import { ItemFilters } from "@/components/item/ItemFilters";
import { useSelectedItemAttributes } from "@/components/item/useSelectedItemAttributes";
import { Spacer } from "@/components/ui/Spacer";

export default function ItemsScreen() {
  const {
    selectedRarities: selectedFilterRarities,
    selectedSlots: selectedFilterSlots,
    selectedStats: selectedFilterStats,
    toggleRarity: toggleFilterRarity,
    toggleSlot: toggleFilterSlot,
    toggleStat: toggleFilterStat,
  } = useSelectedItemAttributes();

  const filteredItems = ITEM_IDS.filter((id) => {
    const item = ITEMS_CONFIG[id];
    if (
      selectedFilterRarities.length &&
      !selectedFilterRarities.includes(item.rarity)
    ) {
      return false;
    }
    if (
      selectedFilterSlots.length &&
      !selectedFilterSlots.includes(item.slot)
    ) {
      return false;
    }
    if (
      selectedFilterStats.length &&
      !selectedFilterStats.every((stat) => item.baseStats[stat])
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
            selectedRarities={selectedFilterRarities}
            selectedSlots={selectedFilterSlots}
            selectedStats={selectedFilterStats}
            toggleRarity={toggleFilterRarity}
            toggleSlot={toggleFilterSlot}
            toggleStat={toggleFilterStat}
          />
        }
        data={filteredItems}
        renderItem={({ item }) => <ItemById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
        ListFooterComponent={<Spacer vertical={64} />}
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
