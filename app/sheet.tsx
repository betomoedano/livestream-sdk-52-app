import { ThemedText } from "@/components/ThemedText";
import { useGlobalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Sheet() {
  const { message } = useGlobalSearchParams();
  return (
    <View style={{ flex: 1 }}>
      <ThemedText type="title">Sheet</ThemedText>
      <ThemedText type="subtitle">{message}</ThemedText>
    </View>
  );
}
