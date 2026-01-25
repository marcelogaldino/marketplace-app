import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-purple-dark">Login</Text>
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text className="text-purple-dark">Ir para registro</Text>
      </TouchableOpacity>
    </View>
  );
}
