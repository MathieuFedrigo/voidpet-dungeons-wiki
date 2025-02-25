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
  selectedStats: (keyof ItemStats)[];
  toggleRarity: (rarity: ItemRarity) => void;
  toggleSlot: (slot: ItemSlot) => void;
  toggleStat: (stat: keyof ItemStats) => void;
}

interface RarityFilterProps {
  selectedRarities: ItemRarity[];
  toggleRarity: (rarity: ItemRarity) => void;
  baseRarities?: ItemRarity[];
  title: string;
}

interface SlotFilterProps {
  selectedSlots: ItemSlot[];
  toggleSlot: (slot: ItemSlot) => void;
  title: string;
}

interface StatFilterProps {
  selectedStats: (keyof ItemStats)[];
  toggleStat: (stat: keyof ItemStats) => void;
  title: string;
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

export const RaritySelector = ({
  selectedRarities,
  toggleRarity,
  baseRarities = [...ITEM_RARITIES],
  title,
}: RarityFilterProps) => {
  return (
    <SelectorSection>
      <SelectorTitle>{title}</SelectorTitle>
      <SelectorRow>
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
      </SelectorRow>
    </SelectorSection>
  );
};

export const SlotSelector = ({
  selectedSlots,
  toggleSlot,
  title,
}: SlotFilterProps) => {
  return (
    <SelectorSection>
      <SelectorTitle>{title}</SelectorTitle>
      <SelectorRow>
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
      </SelectorRow>
    </SelectorSection>
  );
};

export const StatSelector = ({
  selectedStats,
  toggleStat,
  title,
}: StatFilterProps) => {
  return (
    <SelectorSection>
      <SelectorTitle>{title}</SelectorTitle>
      <SelectorRow>
        {ITEM_STATS.map((stat) => {
          const selected = selectedStats.includes(stat);
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
      </SelectorRow>
    </SelectorSection>
  );
};

const Container = styled.View({
  alignSelf: "center",
  width: "100%",
  maxWidth: 420,
  marginBottom: 16,
});

const SelectorSection = styled.View({
  marginBottom: 10,
});

const SelectorTitle = styled.Text(({ theme }) => ({
  fontWeight: "600",
  marginBottom: 6,
  color: theme.colors.text,
}));

const SelectorRow = styled.View({
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
