import styled from "@emotion/native";

import { ItemStats } from "@/components/item/item.type";

import { Collapsible } from "../ui/Collapsible";
import { StatSelector } from "./ItemSelectors";

interface ItemSortersProps {
  selectedStat: keyof ItemStats | null;
  toggleStat: (stat: keyof ItemStats) => void;
}

export const ItemSorters = ({ selectedStat, toggleStat }: ItemSortersProps) => {
  return (
    <Container>
      <Collapsible title="Sorting">
        <StatSelector
          selectedStats={selectedStat ? [selectedStat] : []}
          toggleStat={toggleStat}
          title="Sort by Stats"
        />
      </Collapsible>
    </Container>
  );
};

const Container = styled.View({
  alignSelf: "center",
  width: "100%",
  maxWidth: 420,
  marginBottom: 16,
});
