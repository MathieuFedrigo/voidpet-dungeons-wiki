import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ui/ParallaxScrollView";
import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">TODO:</ThemedText>
        <ThemedText>
          {`- Items
  - ✅ Add All Items page
  - ✅ Add filters to All Items page
    - Make them beautiful
    - ✅ Add sorting
    - put filters/sorting in navigation params
  - ✅ Add Specific Item page
    - ✅ Add "Drops from" section
    - Add level stats simulator

- Bosses
  - ✅ Add All Bosses page
  - ✅ Add Specific Boss page
    - ✅ Add "Boss Drops" section
    - Add stage evolution info
    - save last rarity filter
  - ✅ Add filters to All Bosses page

- Voidpets
  - Add All Voidpets page
  - Add Specific Voidpets page
    - Add level stats simulator
  - Add filters to All Voidpets page
  - Add Sorting to All Voidpets page

- Vivids
  - Add All Vivids page
  - Add filters

- Dungeon levels
  - Add Dungeon levels
  - Add Specific Dungeon level page
    - Add level details (stats, advice...)
`}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
