import { Platform, Text, StyleSheet } from 'react-native';
const theme = {
  
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      tab: '#fffff0',
      error: '#d73a4a'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    align: {
        center: 'center',
    }
  };
  
  export default theme;