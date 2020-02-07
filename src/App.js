import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css"

import Counter from './components/counter'
import NewsList from './components/NewsList'

import './App.css';
function App() {
  return (
    <div className="App">
    <Counter/>
    <NewsList />
    </div>
  );
}

export default App;
