import styled from "@emotion/native";

import { ITEMS_CONFIG } from "./item.config";
import { Item, ItemRarity } from "./item.type";
import { getItemImage, getItemSlot, getItemWaveBg } from "./items.images";

export const ItemImage = ({ id }: { id: Item["id"] }) => {
  return (
    <ImageBackground rarity={ITEMS_CONFIG[id].rarity}>
      <StyledImage source={getItemImage(id)} resizeMode="contain" />
      <WaveBgImage source={getItemWaveBg(id)} resizeMode="stretch" />
      <BottomBlackBar />
      <ItemSlotCircle>
        <ItemSlotColor rarity={ITEMS_CONFIG[id].rarity} />
      </ItemSlotCircle>
      <SlotImage source={getItemSlot(id)} resizeMode="contain" />
    </ImageBackground>
  );
};

const ImageBackground = styled.View<{ rarity: ItemRarity }>(
  ({ rarity, theme }) => ({
    width: 64,
    height: 64,
    backgroundColor: theme.colors.voidpet.rarity[rarity].itemBackground,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: "hidden",
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

const BottomBlackBar = styled.View(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  width: 64,
  height: 9,
  backgroundColor: theme.colors.voidpet.basic.dark,
}));

const ItemSlotCircle = styled.View(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: 16,
  backgroundColor: theme.colors.voidpet.basic.dark,
  position: "absolute",
  bottom: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
}));

const ItemSlotColor = styled.View<{ rarity: ItemRarity }>(
  ({ theme, rarity }) => ({
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: theme.colors.voidpet.rarity[rarity].banner,
    justifyContent: "center",
    alignItems: "center",
  }),
);

const SlotImage = styled.Image(() => ({
  position: "absolute",
  width: 20,
  height: 20,
  bottom: 0,
  left: 0,
}));
