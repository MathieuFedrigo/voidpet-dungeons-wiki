import { useWindowDimensions } from "react-native";

export const useMaxNumColumns = ({
  itemWidth,
  itemSpacing,
  maxColumns = Infinity,
}: {
  itemWidth: number;
  itemSpacing: number;
  maxColumns?: number;
}) => {
  const { width } = useWindowDimensions();

  // Calculate how many columns can fit in the effective width
  // We add one spacing to available width to account for the fact that spacing isn't added at the end.
  const numColumns = Math.max(
    1,
    Math.floor((width + itemSpacing) / (itemWidth + itemSpacing)),
  );

  return {
    numColumns: Math.min(numColumns, maxColumns),
    columnWrapperStyle:
      numColumns > 1
        ? ({ justifyContent: "center", gap: itemSpacing } as const)
        : undefined,
  };
};
