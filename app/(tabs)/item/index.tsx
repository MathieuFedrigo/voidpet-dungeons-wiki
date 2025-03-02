/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ITEMS_CONFIG } from "@/components/item/item.config";
import { ITEM_IDS, ItemStats } from "@/components/item/item.type";
import { ItemById } from "@/components/item/ItemCard";
import { ItemFilters } from "@/components/item/ItemFilters";
import { ItemSorters } from "@/components/item/ItemSorters";
import { useSelectedItemAttributes } from "@/components/item/useSelectedItemAttributes";
import { Spacer } from "@/components/ui/Spacer";
import { useMaxNumColumns } from "@/hooks/useMaxNumColumns";

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
    )
      return false;

    if (selectedFilterSlots.length && !selectedFilterSlots.includes(item.slot))
      return false;

    if (
      selectedFilterStats.length &&
      !selectedFilterStats.every((stat) => item.baseStats[stat])
    )
      return false;

    return true;
  });

  const [selectedSorterStat, setSelectedSorterStat] = useState<
    keyof ItemStats | null
  >(null);

  const sortedItems = filteredItems.sort((a, b) => {
    if (!selectedSorterStat) return 0;
    const statA = ITEMS_CONFIG[a].baseStats[selectedSorterStat] || 0;
    const statB = ITEMS_CONFIG[b].baseStats[selectedSorterStat] || 0;
    return statB - statA;
  });

  const { numColumns, columnWrapperStyle } = useMaxNumColumns({
    itemWidth: 420,
    itemSpacing: 16,
  });

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <>
            <ItemFilters
              selectedRarities={selectedFilterRarities}
              selectedSlots={selectedFilterSlots}
              selectedStats={selectedFilterStats}
              toggleRarity={toggleFilterRarity}
              toggleSlot={toggleFilterSlot}
              toggleStat={toggleFilterStat}
            />
            <ItemSorters
              selectedStat={selectedSorterStat}
              toggleStat={setSelectedSorterStat}
            />
          </>
        }
        data={sortedItems}
        renderItem={({ item }) => <ItemById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
        ListFooterComponent={<Spacer vertical={64} />}
        numColumns={numColumns}
        key={numColumns}
        columnWrapperStyle={columnWrapperStyle}
      />
    </Container>
  );
}

const Separator = styled.View({ height: 16 });

export const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.itemBackground,
}));
