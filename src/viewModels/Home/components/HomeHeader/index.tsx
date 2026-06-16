import { Image, Text, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../../../shared/store/user-store";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";

export const HomeHeader = () => {
  const { user } = useUserStore();
  return (
    <View>
      <TouchableOpacity className="flex-row items-center gap-6">
        <View className="relative">
          {user?.avatarUrl ? (
            <Image
              source={{ uri: user?.avatarUrl }}
              className="w-[56px] h-[56px] rounded-[12px] border-shape"
            />
          ) : (
            <View className="w-[56px] h-[56px] bg-shape border-2 border-gray-200 rounded-[12px] items-center justify-center">
              <Ionicons name="person" color={colors.gray[300]} size={24} />
            </View>
          )}
        </View>

        <View>
          <Text className="font-bold text-base">
            Olá, {user?.name.split(" ")[0] || "Usuário"}
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="color-purple-base font-bold">Ver perfil</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color={colors["purple-base"]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
