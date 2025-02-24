/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BOSS_IDS } from "@/components/boss/boss.type";
import { BossCardById } from "@/components/boss/BossCard";

export default function BossesScreen() {
  return (
    <Container>
      <FlatList
        data={BOSS_IDS}
        renderItem={({ item }) => <BossCardById id={item} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item}
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
