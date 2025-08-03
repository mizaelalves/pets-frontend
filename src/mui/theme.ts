import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AE0FEA",
      // Adicionado para corrigir o contraste do texto no botão
      contrastText: "#FFFFFF", 
    },
    secondary: {
      main: "#C5C5C5",
    },
    text: {
      primary: "#293845",
      secondary: "#9EADBA",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          width: "auto",
          height: "36px",
          // A linha 'color' foi removida para permitir que o tema funcione corretamente
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          required: false,
        },
        required: true,
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "1px solid #D8D8D8",
        },
      },
    },
  },
});

export default theme;