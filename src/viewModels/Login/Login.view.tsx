import { router } from "expo-router";
import { Text, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 justify-center items-center mt-4 px-[40px]">
        <View className="flex-1 items-center justify-center w-full">
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
            autoCapitalize="none"
          />

          <AppInputController
            control={control}
            name="password"
            label="SENHA"
            leftIcon="lock-closed-outline"
            placeholder="Sua senha"
            secureTextEntry
          />

          <AppButton
            variant="filled"
            rightIcon="arrow-forward"
            onPress={onSubmit}
            className="mt-6"
          >
            Acessar
          </AppButton>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base mb-6 text-gray-300">
            Ainda não tem uma conta?
          </Text>

          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("(public)/register")}
          >
            Cadastrar
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
};
