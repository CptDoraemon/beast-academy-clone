import React, {useContext} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ScreenContext, useGetScreenDimension} from "./screen-context";
import Home from "./pages/home";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    overflowX: 'hidden',
    cursor: `url(${process.env.PUBLIC_URL + '/assets/cursors/tool-arrow-point.cur'}),default`
  }
}));

const InnerApp: React.FC = () => {
  const classes = useStyles();
  const screen = useContext(ScreenContext);

  if (screen === null) {
    return <></>
  }

  return (
    <div className={classes.root}>
      <Home/>
    </div>
  );
};

const App = () => {
  const screen = useGetScreenDimension();

  return (
    <ScreenContext.Provider value={screen}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InnerApp />
      </ThemeProvider>
    </ScreenContext.Provider>
  )
};

export default App;
