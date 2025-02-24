import styled from "@emotion/native";
import { Link } from "expo-router";

import { RiveView } from "../ui/RiveView";
import { BOSS_CONFIG } from "./boss.config";
import { Boss } from "./boss.type";

type BossCardProps = {
  boss: Boss;
  disabled?: boolean;
};

export const BossCardById = ({
  id,
  disabled,
}: {
  id: Boss["id"];
  disabled?: boolean;
}) => <BossCard boss={BOSS_CONFIG[id]} disabled={disabled} />;

const BossCard = ({ boss, disabled = false }: BossCardProps) => {
  const { id, name, shortDescription } = boss;

  const content = (
    <CardContainer>
      <ImageContainer>
        <RiveContainer>
          <RiveView
            resourceName={id === "breakfastClub" ? "snap" : id}
            size={150}
          />
        </RiveContainer>
      </ImageContainer>

      <TextContainer>
        <HeaderRow>
          <BossName>{name.toUpperCase()}</BossName>
        </HeaderRow>
        <DescriptionText>{shortDescription}</DescriptionText>
      </TextContainer>
    </CardContainer>
  );

  return disabled ? (
    content
  ) : (
    <Link href={`/boss/${id}`} asChild>
      {content}
    </Link>
  );
};

const CardContainer = styled.Pressable(({ theme }) => ({
  backgroundColor: theme.colors.voidpet.basic.bossCardBackground,
  minWidth: 320,
  maxWidth: 420,
  alignSelf: "center",
  width: "100%",
  borderColor: theme.colors.voidpet.basic.bossCardBorder,
  borderWidth: 1,

  flexDirection: "row",
  alignItems: "center",
  padding: 16,
}));

const ImageContainer = styled.View({
  width: 100,
  height: 70,
});

const RiveContainer = styled.View({
  position: "absolute",
  top: -50,
  left: -40,
});

const TextContainer = styled.View({
  flex: 1,
  justifyContent: "center",
});

const HeaderRow = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const BossName = styled.Text(({ theme }) => ({
  fontSize: 28,
  fontWeight: "900",
  color: theme.colors.voidpet.basic.lightText,
}));

const DescriptionText = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.voidpet.basic.bossText,
  marginTop: 8,
  fontWeight: "600",
}));
