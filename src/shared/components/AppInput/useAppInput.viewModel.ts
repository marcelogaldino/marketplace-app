import { useRef, useState } from "react";
import { BlurEvent, TextInput } from "react-native";
import { colors } from "../../../styles/colors";

interface AppInputViewModelProps {
  isError?: boolean;
  isDisabled?: boolean;
  secureTextEntry?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: BlurEvent) => void;
  mask?: (text: string) => string | void;
  onChangeText?: (text: string) => string | void;
  value?: string;
}

export const useAppInputViewModel = ({
  isDisabled,
  isError,
  onBlur,
  onChangeText,
  onFocus,
  mask,
  secureTextEntry,
  value,
}: AppInputViewModelProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleTextChange = (text: string) => {
    if (mask) {
      onChangeText?.(mask(text) || "");
    } else {
      onChangeText?.(text);
    }
  };

  const handlePasswordToogle = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleWrapperPress = () => {
    inputRef.current?.focus();
  };

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const getIconColor = () => {
    if (isError) return colors.danger;
    if (isFocused) return colors["purple-base"];
    if (value) return colors["purple-base"];

    return colors.gray[200];
  };

  return {
    handleBlur,
    handleFocus,
    handlePasswordToogle,
    handleWrapperPress,
    getIconColor,
    showPassword,
    handleTextChange,
    isFocused,
  };
};
