import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppInputVariantProps, appInputVariants } from "./input.variants";
import { FC } from "react";
import { useAppInputViewModel } from "./useAppInput.viewModel";

export interface AppInputProps extends TextInputProps, AppInputVariantProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  className?: string;
  mask?: (value: string) => string | void;
  error?: string;
}

export const AppInput: FC<AppInputProps> = ({
  containerClassName,
  className,
  label,
  leftIcon,
  rightIcon,
  value,
  isError,
  secureTextEntry = false,
  onBlur,
  onFocus,
  onChangeText,
  mask,
  isDisabled,
  error,
  ...textInputProps
}) => {
  const {
    getIconColor,
    handleBlur,
    handleFocus,
    handlePasswordToogle,
    handleWrapperPress,
    showPassword,
    handleTextChange,
    isFocused,
  } = useAppInputViewModel({
    onFocus: onFocus as any,
    isError: !!error,
    onBlur,
    value,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
  });

  const styles = appInputVariants({
    isFocused,
    isDisabled,
    isError: !!error,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            className="mr-3"
            name={leftIcon}
            size={22}
            color={getIconColor()}
          />
        )}

        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus as any}
          className={styles.input()}
          onChangeText={handleTextChange}
          value={value}
          secureTextEntry={showPassword}
          {...textInputProps}
        />

        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToogle}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
              color={getIconColor()}
            />
          </TouchableOpacity>
        )}
      </Pressable>
      {error && (
        <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  );
};
