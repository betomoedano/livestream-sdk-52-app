import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import { MeshGradientView } from "expo-mesh-gradient";
import { Button, StyleSheet, useColorScheme } from "react-native";

export default function MeshGradient() {
  const isDark = useColorScheme() === "dark";

  const fetchHello = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <ThemedView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {/* <MeshGradientView
          style={StyleSheet.absoluteFill}
          columns={2}
          rows={2}
          colors={isDark ? darkColors : lightColors}
          points={[
            [0.0, 0.0],
            [1.0, 0.0],
            [0.0, 1.0],
            [1.0, 1.0],
          ]}
        /> */}
        <ThemedText type="title">Mesh Gradient</ThemedText>
        <Button title="Hello" onPress={fetchHello} />
      </ThemedView>
    </>
  );
}

const darkColors = [
  "#1a0f0f", // dark red
  "#0a1420", // dark blue
  "#0a200a", // dark green
  "#201a0a", // dark yellow
  "#1a0820", // dark violet
  "#200a14", // dark pink
  "#0a1f20", // dark turquoise
  "#201100", // dark orange
  "#0a0014", // dark indigo
];
const lightColors = [
  "#ff9999", // light red
  "#99ccff", // light blue
  "#99ff99", // light green
  "#ffff99", // light yellow
  "#e6b3ff", // light violet
  "#ffb3cc", // light pink
  "#99ffff", // light turquoise
  "#ffcc99", // light orange
  "#b3b3ff", // light indigo
];
