import React from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore: Remote
import Header from 'header/Header';
import './index.css';

const App = () => (
  <div>
    <Header />
    I'm the consumer app
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
