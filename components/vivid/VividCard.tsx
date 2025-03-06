import styled from "@emotion/native";

import { VIVIDS_CONFIG } from "./vivid.config";
import { VIVID_IMAGE } from "./vivid.images";
import { Vivid, VividName, VividRarity } from "./vivid.type";
import { VividColors } from "./VividColors";

export const VividCardById = ({ id }: { id: VividName }) => (
  <VividCard vivid={VIVIDS_CONFIG[id]} />
);

const VividCard = ({
  vivid: { name, cost, description, rarity, colors },
}: {
  vivid: Vivid;
}) => {
  return (
    <Content>
      <VividColors colors={colors} />
      <VerticalContainer>
        <HorizontalContainer>
          <Name rarity={rarity}>{name.toUpperCase()}</Name>
          <CostContainer>
            <Cost>{cost}</Cost>
            <VividImage source={VIVID_IMAGE} resizeMode="contain" />
          </CostContainer>
        </HorizontalContainer>
        <Description>{description}</Description>
      </VerticalContainer>
    </Content>
  );
};

const Content = styled.View(() => ({
  backgroundColor: "#00000055",
  flexDirection: "row",

  minWidth: 220,
  maxWidth: 320,
  borderRadius: 16,
  alignSelf: "center",
  width: "100%",
}));

const VerticalContainer = styled.View(() => ({
  padding: 16,
  flex: 1,
}));

const HorizontalContainer = styled.View(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
}));

const Name = styled.Text<{ rarity: VividRarity }>(({ theme, rarity }) => ({
  fontSize: 18,
  fontWeight: "900",
  color: theme.colors.voidpet.basic.vivid[rarity],
  marginBottom: 4,
}));

const CostContainer = styled.View({
  flexDirection: "row",
  gap: 4,
});

const Cost = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.lightText,
}));

const VividImage = styled.Image(() => ({
  width: 16,
  height: 16,
}));

const Description = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.lightText,
}));
