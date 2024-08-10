import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const themeOptions: ThemeOptions = {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '14px',
          borderRadius: '12px',
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 12,
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
