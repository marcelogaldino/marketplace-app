import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useRegisterMutation } from "../../shared/queries/auth/useRegister.mutation";
import { useUserStore } from "../../shared/store/user-store";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user, logout } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "Teste 4",
      email: "teste4@testtest.com",
      phone: "11111111114",
      password: "123123123",
      confirmPassword: "123123123",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    const mutationResponse =
      await userRegisterMutation.mutateAsync(registerData);
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    });
  });

  console.log(user);

  return {
    control,
    errors,
    onSubmit,
    logout,
  };
};
