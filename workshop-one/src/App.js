import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Task component:
import Task from './tasks/Task';

const dummyTaskData = [
  {
    title: "Slow down",
    description: "When leading from the front, you cannot go too slow."
  },
  {
    title: "Provide stretch exercises",
    description: "Ensure all students have meaningful, challenging work to do."
  },
  {
    title: "Provide actual stretch exercises",
    description: "It's important whilst coding to stretch and not hunch over the keyboard"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <Task title="Set new quiz" description="Make it hard" />
          <Task title="Mark coursework" description="Be really mean" />
          <Task title="Plan Day 2" description="Do more coding"/>
        </section>
      </div>
    );
  }
}

export default App;
