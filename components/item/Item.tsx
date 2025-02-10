import styled from "@emotion/native";

import { ITEMS_CONFIG } from "./item.config";
import { Item, ItemRarity } from "./item.type";
import { ItemImage } from "./ItemImage";

type Props = { item: Item };

export const ItemById = ({ id }: { id: Item["id"] }) => (
  <ItemCard item={ITEMS_CONFIG[id]} />
);

export const ItemCard = ({
  item: { name, rarity, description, baseStats, id },
}: Props) => {
  return (
    <Container>
      <RarityLabel rarity={rarity}>{rarity.toUpperCase()} GEAR</RarityLabel>

      <ItemImage id={id} />

      <ItemName>{name}</ItemName>

      {description && <Description>{description}</Description>}

      <StatsContainer>
        {baseStats.attack !== null && (
          <StatText>ATK: {baseStats.attack}</StatText>
        )}
        {baseStats.defense !== null && (
          <StatText>DEF: {baseStats.defense}</StatText>
        )}
        {baseStats.speed !== null && (
          <StatText>SPD: {baseStats.speed}</StatText>
        )}
        {baseStats.stamina !== null && (
          <StatText>STA: {baseStats.stamina}</StatText>
        )}
        {baseStats.crit !== null && (
          <StatText>CRIT: {baseStats.crit}%</StatText>
        )}
      </StatsContainer>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.voidpet.basic.background,
  padding: 16,
  borderRadius: 12,
  width: 320,
  alignItems: "center",
}));

const RarityLabel = styled.Text<{ rarity: ItemRarity }>(
  ({ rarity, theme }) => ({
    backgroundColor: theme.colors.voidpet.rarity[rarity].banner,
    color: theme.colors.voidpet.basic.lightText,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontWeight: "600",
    marginBottom: 8,
  }),
);

const ItemName = styled.Text(({ theme }) => ({
  fontSize: 18,
  fontWeight: "700",
  color: theme.colors.voidpet.basic.text,
  marginBottom: 4,
}));

const Description = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.text,
  textAlign: "center",
  marginBottom: 8,
}));

const StatsContainer = styled.View({
  marginBottom: 12,
});

const StatText = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.text,
}));
