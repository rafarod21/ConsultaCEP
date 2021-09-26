import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#2E8BC0',
      },
      secondary: {
        main: '#FF9900',
      },
      error: {
        main: '#EC3B3B',
      },
    },
  },
  ptBR
);
