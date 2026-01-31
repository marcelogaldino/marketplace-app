import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/auth.service";
import { RegisterHttpParams } from "../../interfaces/http/register";

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      authService.register(userData),
    onSuccess: (response) => {
      console.log("Registration successful:", response);
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
  return mutation;
};
