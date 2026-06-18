/// <reference types="nativewind/types" />

import "react-native";
import "nativewind";

export {};

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
    placeholderClassName?: string;
  }

  interface PressableProps {
    className?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
  }
}
