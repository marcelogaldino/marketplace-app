import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";
import {
  SelectionModal,
  SelectionModalProps,
} from "../components/Modals/SelectionModal";
import { useModalStore } from "../store/modal-store";

export interface SelectionOption {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: SelectionVariant;
}

export type SelectionVariant = "primary" | "secondary" | "danger";

export const useAppModal = () => {
  const { open, close } = useModalStore();

  const showSelection = ({
    options,
    title,
    message,
  }: {
    title: string;
    message?: string;
    options: SelectionOption[];
  }) => {
    open(
      createElement(SelectionModal, {
        options,
        title,
        message,
      } as SelectionModalProps),
    );
  };
  return { showSelection };
};
