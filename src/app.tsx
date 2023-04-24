import * as ReactDOM from "react-dom";
import { Typography, ThemeProvider } from "@mui/material";
import { theme } from "./mui/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography>Track Selector</Typography>
    </ThemeProvider>
  );
};

function render() {
  ReactDOM.render(<App />, document.body);
}

render();
