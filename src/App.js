import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello React Project
//         </p>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="gray-background">
          <img src={logo} lat="logo" />
          <h2>Let's develop management system!</h2>
      </div>
    );
  }
}

export default App;
