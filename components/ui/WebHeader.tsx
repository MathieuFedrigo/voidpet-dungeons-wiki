import styled from "@emotion/native";
import { Link, usePathname } from "expo-router";

import { ThemedText } from "./ThemedText";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Items", path: "/item" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <Container>
      {navItems.map((item) => (
        <StyledLink
          key={item.path}
          href={item.path}
          isActive={pathname === item.path}
        >
          <ThemedText type="defaultSemiBold">{item.label}</ThemedText>
        </StyledLink>
      ))}
    </Container>
  );
}

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.background,
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
  borderBottomWidth: 1,
}));

const StyledLink = styled(Link)<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    marginRight: 16,
    borderBottomWidth: 2,
    borderBottomColor: isActive ? theme.colors.tint : "transparent",
  }),
);
