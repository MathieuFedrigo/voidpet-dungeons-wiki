import styled from "@emotion/native";

import { ITEMS_CONFIG } from "./item.config";
import { Item, ItemRarity } from "./item.type";
import { ItemImage } from "./ItemImage";

type Props = { item: Item };

export const ItemById = ({ id }: { id: Item["id"] }) => (
  <ItemCard item={ITEMS_CONFIG[id]} />
);

export const ItemCard = ({
  item: {
    name,
    rarity,
    description,
    baseStats: { attack, crit, defense, speed, stamina },
    id,
  },
}: Props) => {
  return (
    <Container>
      <RarityLabel rarity={rarity}>{rarity.toUpperCase()} GEAR</RarityLabel>

      <Content>
        <ItemInfo>
          <ItemImage id={id} />

          <ItemFullDescription>
            <ItemName>{name.toUpperCase()}</ItemName>
            {description && <Description>{description}</Description>}
          </ItemFullDescription>
        </ItemInfo>

        <Separator />

        <StatsContainer>
          {attack && <StatText>Attack: {attack}</StatText>}
          {defense && <StatText>Defense: {defense}</StatText>}
          {speed && <StatText>Speed: {speed}</StatText>}
          {stamina && <StatText>Stamina: {stamina}</StatText>}
          {crit && <StatText>Crit Chance: {crit}%</StatText>}
        </StatsContainer>
      </Content>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.voidpet.basic.light,
  width: 420,
  borderTopLeftRadius: 32,
  borderBottomRightRadius: 32,
}));

const Content = styled.View(() => ({
  padding: 16,
}));

const ItemInfo = styled.View(() => ({
  flexDirection: "row",
}));

const ItemFullDescription = styled.View(() => ({
  marginLeft: 16,
  flex: 1,
}));

const RarityLabel = styled.Text<{ rarity: ItemRarity }>(
  ({ rarity, theme }) => ({
    backgroundColor: theme.colors.voidpet.rarity[rarity].banner,
    color: theme.colors.voidpet.basic.lightText,
    paddingVertical: 8,
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
    borderTopLeftRadius: 32,
  }),
);

const ItemName = styled.Text(({ theme }) => ({
  fontSize: 18,
  fontWeight: "900",
  color: theme.colors.voidpet.basic.dark,
  marginBottom: 4,
}));

const Description = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.dark,
}));

const Separator = styled.View(({ theme }) => ({
  width: "100%",
  height: 1,
  backgroundColor: theme.colors.voidpet.basic.separator,
  marginVertical: 16,
}));

const StatsContainer = styled.View({
  marginBottom: 12,
});

const StatText = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.dark,
}));
