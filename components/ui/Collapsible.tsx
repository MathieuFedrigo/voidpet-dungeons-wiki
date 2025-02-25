import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { PropsWithChildren, useState } from "react";
import { View } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ui/ThemedText";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <View>
      <Button onPress={() => setIsOpen((value) => !value)} activeOpacity={0.8}>
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
