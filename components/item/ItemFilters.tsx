import styled from "@emotion/native";

import {
  ITEM_RARITIES,
  ITEM_SLOTS,
  ITEM_STATS,
  ItemRarity,
  ItemSlot,
  ItemStats,
} from "@/components/item/item.type";

import { Collapsible } from "../ui/Collapsible";

interface ItemFiltersProps {
  selectedRarities: ItemRarity[];
  selectedSlots: ItemSlot[];
  filterStats: (keyof ItemStats)[];
  toggleRarity: (rarity: ItemRarity) => void;
  toggleSlot: (slot: ItemSlot) => void;
  toggleStat: (stat: keyof ItemStats) => void;
}

interface RarityFilterProps {
  selectedRarities: ItemRarity[];
  toggleRarity: (rarity: ItemRarity) => void;
  baseRarities?: ItemRarity[];
}

interface SlotFilterProps {
  selectedSlots: ItemSlot[];
  toggleSlot: (slot: ItemSlot) => void;
}

interface StatFilterProps {
  filterStats: (keyof ItemStats)[];
  toggleStat: (stat: keyof ItemStats) => void;
}

export const ItemFilters = ({
  selectedRarities,
  selectedSlots,
  filterStats,
  toggleRarity,
  toggleSlot,
  toggleStat,
}: ItemFiltersProps) => {
  return (
    <Container>
      <Collapsible title="Filters">
        <RarityFilter
          selectedRarities={selectedRarities}
          toggleRarity={toggleRarity}
        />
        <SlotFilter selectedSlots={selectedSlots} toggleSlot={toggleSlot} />
        <StatFilter filterStats={filterStats} toggleStat={toggleStat} />
      </Collapsible>
    </Container>
  );
};

export const RarityFilter = ({
  selectedRarities,
  toggleRarity,
  baseRarities = [...ITEM_RARITIES],
}: RarityFilterProps) => {
  return (
    <FilterSection>
      <FilterTitle>Filter by Rarity</FilterTitle>
      <FilterRow>
        {baseRarities.map((rarity) => {
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
  );
};

export const SlotFilter = ({ selectedSlots, toggleSlot }: SlotFilterProps) => {
  return (
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
  );
};

export const StatFilter = ({ filterStats, toggleStat }: StatFilterProps) => {
  return (
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
  );
};

const Container = styled.View({
  alignSelf: "center",
  width: "100%",
  maxWidth: 420,
  marginBottom: 16,
});

const FilterSection = styled.View({
  marginBottom: 10,
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
