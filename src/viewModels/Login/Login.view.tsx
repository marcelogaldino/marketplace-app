import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 justify-center items-center mt-4 px-[40px]">
        <AuthFormHeader
          title="Acesse sua conta"
          subtitle="Informe seu e-mail e senha para entrar"
        />

        <AppInputController
          control={control}
          name="email"
          label="EMAIL"
          leftIcon="mail-outline"
          placeholder="mail@mail.com.br"
        />

        <AppInputController
          control={control}
          name="password"
          label="SENHA"
          leftIcon="lock-closed-outline"
          placeholder="Sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text className="text-purple-dark">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text className="text-purple-dark">Ir para registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
};
