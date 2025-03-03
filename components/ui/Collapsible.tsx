import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { create } from "zustand";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ui/ThemedText";

interface CollapsibleState {
  openStates: Record<string, boolean>;
  toggle: (id: string) => void;
}

export const useCollapsibleStore = create<CollapsibleState>((set) => ({
  openStates: {},
  toggle: (id) =>
    set((state) => ({
      openStates: {
        ...state.openStates,
        [id]: !state.openStates[id],
      },
    })),
}));

export function Collapsible({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  const toggle = useCollapsibleStore((s) => s.toggle);
  const isOpen = useCollapsibleStore((s) => s.openStates[title]);

  const theme = useTheme();

  return (
    <View>
      <Button onPress={() => toggle(title)} activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme.colors.icon}
          style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </Button>
      {isOpen && <Content>{children}</Content>}
    </View>
  );
}

const Button = styled.TouchableOpacity({
  flexDirection: "row",
  alignItems: "center",
  gap: 6,
});

const Content = styled.View({
  marginTop: 6,
  marginLeft: 24,
});
