import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AppModal } from "../shared/components/AppModal";
import ToastManager from "toastify-react-native";
import "../styles/global.css";

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(private)" />
      </Stack>
      <AppModal />
      <ToastManager useModal={false} />
    </QueryClientProvider>
  );
}
