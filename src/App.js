import React from 'react';
// MuiThemeProvider makes the material-ui work
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <NavBar />
      <Search />
    </MuiThemeProvider>
  );
}

export default App;