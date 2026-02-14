import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppButtonVariantProps, appButtonVariants } from "./button.variants";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { colors } from "../../../styles/colors";

interface AppButtonProps extends TouchableOpacityProps, AppButtonVariantProps {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

export const AppButton: FC<AppButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  variant = "filled",
  isDisabled,
  isLoading,
  className,
  ...rest
}) => {
  const contentColor =
    variant === "filled" ? colors.white : colors["purple-base"];

  const styles = appButtonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isDisabled,
    isLoading,
    variant,
    className,
  });

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size={"small"} color={contentColor} />;
    }

    return (
      <>
        {leftIcon && (
          <Ionicons name={leftIcon} color={contentColor} size={20} />
        )}

        <Text className={styles.text()}>{children}</Text>

        {rightIcon && (
          <Ionicons name={rightIcon} color={contentColor} size={20} />
        )}
      </>
    );
  };

  return (
    <TouchableOpacity className={styles.base({ className })} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
};
