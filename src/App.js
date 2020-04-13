import React from 'react';
// MuiThemeProvider makes the material-ui work
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';

import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <NavBar />
    </MuiThemeProvider>
  );
}

export default App;