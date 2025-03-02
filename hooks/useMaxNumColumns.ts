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

  // Constants
  const maxContentWidth = itemWidth * 3 + itemSpacing * 2; // Maximum width for the content (like a blog's max width)

  // Use the smaller of the window width or maxContentWidth to calculate columns
  const effectiveWidth = Math.min(width, maxContentWidth);

  // Calculate how many columns can fit in the effective width
  // We add one spacing to available width to account for the fact that spacing isn't added at the end.
  const numColumns = Math.max(
    1,
    Math.floor((effectiveWidth + itemSpacing) / (itemWidth + itemSpacing)),
  );

  return {
    numColumns: Math.min(numColumns, maxColumns),
    columnWrapperStyle:
      numColumns > 1
        ? ({ justifyContent: "center", gap: itemSpacing } as const)
        : undefined,
  };
};
