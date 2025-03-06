import styled from "@emotion/native";

import { ItemRarity } from "../item/item.type";
import { ThemedText } from "../ui/ThemedText";
import { VOID_VIVIDS_CONFIG } from "./vivid.config";
import { Vivid, VividName, VividRarity } from "./vivid.type";

export const VividCardById = ({ id }: { id: VividName }) => (
  <VividCard vivid={VOID_VIVIDS_CONFIG[id]} />
);

const VividCard = ({
  vivid: { name, cost, description, rarity, colors },
}: {
  vivid: Vivid;
}) => {
  return (
    <>
      <ThemedText>
        {name}
        {"\n"}
        {description}
        {"\n"}
        Cost: {cost}
        {"\n"}
        Rarity: {rarity}
        {"\n"}
        Colors: {JSON.stringify(colors, null, 2)}
      </ThemedText>
      <Content>
        <ItemInfo>
          <ImageBackground rarity="common" />
          <ItemFullDescription>
            <ItemName rarity={rarity}>{name.toUpperCase()}</ItemName>
            {description && <Description>{description}</Description>}
          </ItemFullDescription>
        </ItemInfo>
      </Content>
    </>
  );
};

const Content = styled.View(() => ({
  backgroundColor: "#00000055",

  minWidth: 220,
  maxWidth: 320,
  borderRadius: 16,
  alignSelf: "center",
  width: "100%",
}));

const ItemInfo = styled.View(() => ({
  flexDirection: "row",
}));

const ItemFullDescription = styled.View(() => ({
  padding: 16,
  flex: 1,
}));

const ItemName = styled.Text<{ rarity: VividRarity }>(({ theme, rarity }) => ({
  fontSize: 18,
  fontWeight: "900",
  color: theme.colors.voidpet.basic.vivid[rarity],
  marginBottom: 4,
}));

const Description = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.lightText,
}));

const ImageBackground = styled.View<{ rarity: ItemRarity }>(() => ({
  width: 96,
  height: 96,
  backgroundColor: "#00000095",
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
  overflow: "hidden",
}));
