import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



function App() {
  return (
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact Component={TodoApp} />
          <Route path= "/about" Component={About} />
        </Routes>
        
      </Router>
  );
}

export default App;
