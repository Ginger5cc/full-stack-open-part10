import { Text as NativeText, StyleSheet } from 'react-native';


import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts,
    fontWeight: theme.fontWeights.normal,
    lineHeight: 24,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTab: {
    color: theme.colors.tab,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorError: {
    color: theme.colors.error,
    marginBottom: 0,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeNormal: {
    fontSize: theme.fontSizes.normal,
  },
  fontWeightsNormal: {
    fontSize: theme.fontWeights.normal,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  alignCenter: {
    textAlign: theme.align.center,
    },
});

const Text = ({ color, fontSize, fontWeight, style, align, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'tab' && styles.colorTab,
    color === 'error' && styles.colorError,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'normal' && styles.fontSizeNormal,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontWeight === 'normal' && styles.fontWeightNormal,
    align === 'center' && styles.alignCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;