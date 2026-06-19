import React from 'react';
import { Text as RNText } from 'react-native';

type HeadingProps = React.ComponentPropsWithoutRef<typeof RNText> & {
  className?: string;
};

const Heading = React.forwardRef<React.ElementRef<typeof RNText>, HeadingProps>(
  ({ className, ...props }, ref) => (
    <RNText
      ref={ref}
      accessibilityRole="header"
      className={className}
      {...props}
    />
  ),
);

Heading.displayName = 'Heading';

export { Heading };
