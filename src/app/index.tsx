import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { extstyles } from "./styles";

export default function Home() {
  return (
    <SafeAreaView style={extstyles.container}>
      <Text> TaskFlow </Text>
      <Text>Organize suas tarefas de forma simples</Text>
    </SafeAreaView>
  );
}
