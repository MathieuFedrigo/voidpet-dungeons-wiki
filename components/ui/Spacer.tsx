import { memo } from "react";
import { View } from "react-native";

type Props = { horizontal: number } | { vertical: number };

export const Spacer = memo((props: Props) => {
  return (
    <View
      style={{
        ...("horizontal" in props && { width: props.horizontal }),
        ...("vertical" in props && { height: props.vertical }),
      }}
    />
  );
});

Spacer.displayName = "Spacer";
