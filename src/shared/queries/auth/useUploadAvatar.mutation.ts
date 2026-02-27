import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/auth.service";
import { Toast } from "toastify-react-native";

export const useUploadAvatarMutation = () => {
  const mutation = useMutation({
    mutationFn: authService.uploadAvatar,
    onSuccess: (response) => {
      console.log("Upload Avatar successful:", response);
    },
    onError: (error: any) => {
      console.error(error);
      Toast.error("Erro ao realizar upload da foto de perfil");
    },
  });
  return mutation;
};
