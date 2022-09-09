import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#384478',
  primaryLight: '#3d4d8f',
  onPrimary: '#fbfafc',
  secondary: '#ba3643',
  secondaryDark: '#91242f',
  onSecondary: '#fbfafc',
  background: '#ffffff',
  backgroundDark: '#b5bcd6',
  onBackground: '#080917',
  surface: '#e1d9ff',
  surfaceDark: '#858196',
  textSecondary: '#757575',
};

const styles = {
  global: {
    body: {
      backgroundColor: colors.background,
      color: colors.onBackground,
      fontWeight: '400',
      fontFamily: 'Montserrat, sans-serif',
    },
    li: {
      listStyleType: 'none',
    },
  },
};

export default extendTheme({ colors, styles });
