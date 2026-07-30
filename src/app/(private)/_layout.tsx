import { Redirect, Stack } from "expo-router";
import { View } from "react-native";
import { useUserStore } from "../../shared/store/user-store";
import { AppBottomSheet } from "../../shared/components/AppBottomSheet";

export default function PrivateRootLayout() {
  const { user, token } = useUserStore();

  if (!user || !token) {
    return <Redirect href={"/(public)/login"} />;
  }
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
      </Stack>
      <AppBottomSheet />
    </View>
  );
}
