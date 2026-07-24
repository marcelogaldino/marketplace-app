import { FC } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { AppButton } from "../../shared/components/AppButton";
import { Ionicons } from "@expo/vector-icons";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
  handleSelectAvatar,
  avatarUri,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 mt-4 px-[40px]">
        <View className="flex-1 justify-center w-full">
          <AuthFormHeader
            title="Crie sua conta"
            subtitle="Informe seus dados pessoais e de acesso"
          />
          <TouchableOpacity
            className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8"
            onPress={handleSelectAvatar}
          >
            {avatarUri ? (
              <Image
                className="w-full h-full rounded-[12px]"
                source={{ uri: avatarUri }}
              />
            ) : (
              <Ionicons name="cloud-upload-outline" size={32} />
            )}
          </TouchableOpacity>
          <AppInputController
            control={control}
            name="name"
            leftIcon="person-outline"
            label="NOME"
            placeholder="Seu nome completo"
          />

          <AppInputController
            control={control}
            name="phone"
            leftIcon="call-outline"
            label="TELEFONE"
            placeholder="(00) 00000-0000"
          />

          <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

          <AppInputController
            control={control}
            name="email"
            label="EMAIL"
            leftIcon="mail-outline"
            placeholder="mail@mail.com.br"
            autoComplete="off"
            autoCorrect={false}
            spellCheck={false}
            importantForAutofill="no"
            autoCapitalize="none"
          />

          <AppInputController
            control={control}
            name="password"
            leftIcon="lock-closed-outline"
            label="SENHA"
            placeholder="Sua senha"
            secureTextEntry
          />

          <AppInputController
            control={control}
            name="confirmPassword"
            leftIcon="lock-closed-outline"
            label="CONFIRMAR SENHA"
            placeholder="Confirme a senha"
            secureTextEntry
          />

          <AppButton
            variant="filled"
            rightIcon="arrow-forward"
            onPress={onSubmit}
          >
            Cadastrar
          </AppButton>
        </View>

        <View className="mt-12">
          <Text className="text-base mb-6 text-gray-300">
            Já tem uma conta?
          </Text>
          <AppButton
            className="mb-8"
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("(public)/login")}
          >
            Acessar
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
