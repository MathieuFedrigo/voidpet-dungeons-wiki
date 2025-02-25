/* eslint-disable react-native/no-inline-styles */
import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getBoss } from "@/components/boss/boss.config";
import { BossId } from "@/components/boss/boss.type";
import { BossCardById } from "@/components/boss/BossCard";
import { ITEMS_CONFIG } from "@/components/item/item.config";
import { ItemRarity } from "@/components/item/item.type";
import { ItemById } from "@/components/item/ItemCard";
import { RaritySelector } from "@/components/item/ItemSelectors";
import { Spacer } from "@/components/ui/Spacer";

export default function SpecificBossScreen() {
  const { bossId } = useLocalSearchParams<{ bossId: BossId }>();
  const drops = getBoss(bossId).drops;

  const [selectedRarities, setSelectedRarities] = useState<ItemRarity[]>([]);

  const toggleRarity = (rarity: ItemRarity) => {
    setSelectedRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((r) => r !== rarity)
        : [...prev, rarity],
    );
  };

  const filteredDrops = drops.filter((id) => {
    const item = ITEMS_CONFIG[id];
    return !selectedRarities.length || selectedRarities.includes(item.rarity);
  });

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <>
            <BossCardById id={bossId} disabled />
            <DropsFromText>DROPS:</DropsFromText>
            <FilterContainer>
              <RaritySelector
                selectedRarities={selectedRarities}
                toggleRarity={toggleRarity}
                baseRarities={["common", "rare", "epic", "legendary"]}
                title="Filter by Rarity"
              />
            </FilterContainer>
          </>
        }
        data={filteredDrops}
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

const FilterContainer = styled.View({
  alignSelf: "center",
  width: "100%",
  maxWidth: 420,
});
