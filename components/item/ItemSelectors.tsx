import styled from "@emotion/native";

import {
  ITEM_RARITIES,
  ITEM_SLOTS,
  ITEM_STATS,
  ItemRarity,
  ItemSlot,
  ItemStats,
} from "@/components/item/item.type";

interface RaritySelectorProps {
  selectedRarities: ItemRarity[];
  toggleRarity: (rarity: ItemRarity) => void;
  baseRarities?: ItemRarity[];
  title: string;
}

interface SlotSelectorProps {
  selectedSlots: ItemSlot[];
  toggleSlot: (slot: ItemSlot) => void;
  title: string;
}

interface StatSelectorProps {
  selectedStats: (keyof ItemStats)[];
  toggleStat: (stat: keyof ItemStats) => void;
  title: string;
}

export const RaritySelector = ({
  selectedRarities,
  toggleRarity,
  baseRarities = [...ITEM_RARITIES],
  title,
}: RaritySelectorProps) => {
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
}: SlotSelectorProps) => {
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
}: StatSelectorProps) => {
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
