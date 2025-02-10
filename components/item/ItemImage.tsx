import styled from "@emotion/native";

import { ITEMS_CONFIG } from "./item.config";
import { Item, ItemRarity } from "./item.type";
import { getItemImage, getItemWaveBg } from "./items.images";

export const ItemImage = ({ id }: { id: Item["id"] }) => {
  return (
    <ImageBackground rarity={ITEMS_CONFIG[id].rarity}>
      <StyledImage source={getItemImage(id)} resizeMode="contain" />
      <WaveBgImage source={getItemWaveBg(id)} resizeMode="stretch" />
    </ImageBackground>
  );
};

const ImageBackground = styled.View<{ rarity: ItemRarity }>(
  ({ rarity, theme }) => ({
    width: 64,
    height: 64,
    backgroundColor: theme.colors.voidpet.rarity[rarity].itemBackground,
  }),
);

const StyledImage = styled.Image(() => ({
  width: 64,
  height: 64,
}));

const WaveBgImage = styled.Image(() => ({
  position: "absolute",
  height: 32,
  width: 64,
  top: 32,
  left: 0,
}));
