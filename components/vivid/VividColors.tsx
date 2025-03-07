import styled from "@emotion/native";

import { Vivid } from "./vivid.type";

export const VividColors = ({
  colors: { primary, secondary, tertiary },
}: {
  colors: Vivid["colors"];
}) => (
  <DarkContainer>
    <ColorsContainer>
      <PrimaryColor color={primary} />
      <ColorsVerticalContainer>
        <SecondaryColor color={secondary} />
        <TertiaryColor color={tertiary} />
      </ColorsVerticalContainer>
    </ColorsContainer>
  </DarkContainer>
);

const COLORS_CONTAINER_SIZE = 64;
const DARK_CONTAINER_SIZE = COLORS_CONTAINER_SIZE + 16;

const RATIO_PRIMARY = 3 / 5;
const RATIO_SECONDARY = 2 / 3;

const PRIMARY_COLOR_WIDTH = COLORS_CONTAINER_SIZE * RATIO_PRIMARY;
const PRIMARY_COLOR_HEIGHT = COLORS_CONTAINER_SIZE;
const SECONDARY_COLOR_WIDTH = COLORS_CONTAINER_SIZE * (1 - RATIO_PRIMARY);
const SECONDARY_COLOR_HEIGHT = COLORS_CONTAINER_SIZE * RATIO_SECONDARY;
const TERTIARY_COLOR_WIDTH = COLORS_CONTAINER_SIZE * (1 - RATIO_PRIMARY);
const TERTIARY_COLOR_HEIGHT = COLORS_CONTAINER_SIZE * (1 - RATIO_SECONDARY);

const DarkContainer = styled.View({
  width: DARK_CONTAINER_SIZE,
  height: DARK_CONTAINER_SIZE,
  backgroundColor: "#00000095",
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
  overflow: "hidden",
  padding: 8,
});

const ColorsContainer = styled.View({
  width: COLORS_CONTAINER_SIZE,
  height: COLORS_CONTAINER_SIZE,
  borderRadius: 16,
  overflow: "hidden",
  flexDirection: "row",
});

const ColorsVerticalContainer = styled.View({
  width: SECONDARY_COLOR_WIDTH,
  height: COLORS_CONTAINER_SIZE,
  flexDirection: "column",
});

const PrimaryColor = styled.View<{ color: string }>(({ color }) => ({
  width: PRIMARY_COLOR_WIDTH,
  height: PRIMARY_COLOR_HEIGHT,
  backgroundColor: color,
}));

const SecondaryColor = styled.View<{ color: string }>(({ color }) => ({
  width: SECONDARY_COLOR_WIDTH,
  height: SECONDARY_COLOR_HEIGHT,
  backgroundColor: color,
}));

const TertiaryColor = styled.View<{ color: string }>(({ color }) => ({
  width: TERTIARY_COLOR_WIDTH,
  height: TERTIARY_COLOR_HEIGHT,
  backgroundColor: color,
}));
