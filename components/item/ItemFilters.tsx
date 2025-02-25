import styled from "@emotion/native";

import { ItemRarity, ItemSlot, ItemStats } from "@/components/item/item.type";

import { Collapsible } from "../ui/Collapsible";
import { RaritySelector, SlotSelector, StatSelector } from "./ItemSelectors";

interface ItemFiltersProps {
  selectedRarities: ItemRarity[];
  selectedSlots: ItemSlot[];
  selectedStats: (keyof ItemStats)[];
  toggleRarity: (rarity: ItemRarity) => void;
  toggleSlot: (slot: ItemSlot) => void;
  toggleStat: (stat: keyof ItemStats) => void;
}

export const ItemFilters = ({
  selectedRarities,
  selectedSlots,
  selectedStats,
  toggleRarity,
  toggleSlot,
  toggleStat,
}: ItemFiltersProps) => {
  return (
    <Container>
      <Collapsible title="Filters">
        <RaritySelector
          selectedRarities={selectedRarities}
          toggleRarity={toggleRarity}
          title="Filter by Rarity"
        />
        <SlotSelector
          selectedSlots={selectedSlots}
          toggleSlot={toggleSlot}
          title="Filter by Slot"
        />
        <StatSelector
          selectedStats={selectedStats}
          toggleStat={toggleStat}
          title="Filter by Stats"
        />
      </Collapsible>
    </Container>
  );
};

const Container = styled.View({
  alignSelf: "center",
  width: "100%",
  maxWidth: 420,
  marginBottom: 16,
});
