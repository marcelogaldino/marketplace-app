import { Text, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../shared/store/user-store";

export default function Home() {
  const { logout } = useUserStore();
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
