import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/auth.service";
import { LoginHttpParams } from "../../interfaces/http/login";
import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store";

export const useLoginMutation = () => {
  const { setSession } = useUserStore();
  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => authService.login(userData),
    onSuccess: (response) => {
      setSession(response);
      console.log("Login successful:", response);
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
  return mutation;
};
