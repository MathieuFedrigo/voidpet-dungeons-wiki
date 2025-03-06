import { ThemedText } from "../ui/ThemedText";
import { VOID_VIVIDS_CONFIG } from "./vivid.config";
import { Vivid, VividName } from "./vivid.type";

export const VividCardById = ({ id }: { id: VividName }) => (
  <VividCard vivid={VOID_VIVIDS_CONFIG[id]} />
);

const VividCard = ({
  vivid: { name, cost, description, rarity, colors },
}: {
  vivid: Vivid;
}) => {
  return (
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
  );
};
