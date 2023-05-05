import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { blue, blueGrey, cyan, deepOrange, deepPurple, green, indigo, red} from '@mui/material/colors';
import {ThemeProvider, createTheme } from '@mui/material/styles';

window.apiURL = 'http://localhost:9001' // to be replaced by your external ip.
// you also need port forwarding for the server & webpage ports.

const theme = createTheme({
  palette: {
    primary: { // roll init color
      main: red[900],
    },
    secondary: { // create character color
      main: green[800],
    },
    third: { // health color
      main: red[400],
    },
    deeppurp: { // submit edits buttons
      main: deepPurple[400],
    },
    editblue: {
      main: blue[500],
    },
    enterblue: {
      main: '#2979FF',
    },
    dmblue: {
      main: indigo[800],
    },
    deletered: {
      main: '#FF1744',
    },
    currentturn: {
      main: '#FFC107'
    },
    nextturn: {
      main: '#AB47BC',
    },
    eighth: { // soft delete red
      main: red[200],
    },
    sixth: { // other colors / misc
      main: blueGrey[300],
    },
    seventh: { // armor class color
      main: deepOrange[900],
    },
    ninth: { // init speed color
      main: cyan[200],
    },
    lightteal: { 
      main: '#4DB6AC',
    },
    sandyellow: { 
      main: '#FFE57F',
    },
    speedBlue: { 
      main: '#2ac9cb',
    },
  },
});

const getData = async () => {
  const res = fetch('https://icanhazip.com', {
    method: 'GET',
  })
  .then(response => response.text())
  .then(response => {
    window.apiURL = 'http://'+response+':9001'
    console.log('external ip: ' + window.apiURL);
    startApp();
  })
  .catch(err => {
      console.log(err);
  });
  

}

getData()

function startApp() {
  ReactDOM.render( 
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
