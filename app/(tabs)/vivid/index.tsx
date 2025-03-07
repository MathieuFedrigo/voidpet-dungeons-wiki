import styled from "@emotion/native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Spacer } from "@/components/ui/Spacer";
import { VOID_VIVID_NAMES } from "@/components/vivid/vivid.config";
import { VividCardById } from "@/components/vivid/VividCard";
import { useMaxNumColumns } from "@/hooks/useMaxNumColumns";

export default function VividsScreen() {
  const { numColumns, columnWrapperStyle } = useMaxNumColumns({
    itemWidth: 320,
    itemSpacing: 16,
    maxColumns: 4,
  });

  return (
    <Container>
      <FlatList
        data={VOID_VIVID_NAMES}
        renderItem={({ item }) => <VividCardById id={item} />}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={<Spacer vertical={64} />}
        numColumns={numColumns}
        key={numColumns}
        columnWrapperStyle={columnWrapperStyle}
      />
    </Container>
  );
}

const Separator = styled.View({ height: 16 });

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  padding: 12,
  backgroundColor: theme.colors.voidpet.basic.vividBackground,
}));
