import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
  logout,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Marcelo</Text>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
