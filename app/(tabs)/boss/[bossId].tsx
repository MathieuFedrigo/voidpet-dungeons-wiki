/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getBoss } from "@/components/boss/boss.config";
import { BossId } from "@/components/boss/boss.type";
import { BossCardById } from "@/components/boss/BossCard";
import { ItemById } from "@/components/item/ItemCard";
import { Spacer } from "@/components/ui/Spacer";

export default function SpecificBossScreen() {
  const { bossId } = useLocalSearchParams<{ bossId: BossId }>();
  const drops = getBoss(bossId).drops;
  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <>
            <BossCardById id={bossId} disabled />
            <DropsFromText>DROPS:</DropsFromText>
          </>
        }
        data={drops}
        renderItem={({ item }) => <ItemById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
        ListFooterComponent={<Spacer vertical={64} />}
      />
    </Container>
  );
}

const Separator = styled.View({ height: 16 });

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.bossBackground,
}));

const DropsFromText = styled.Text(({ theme }) => ({
  margin: 16,
  fontSize: 16,
  color: theme.colors.voidpet.basic.lightText,
  alignSelf: "center",
  fontWeight: "600",
}));
