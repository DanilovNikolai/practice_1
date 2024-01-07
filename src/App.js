import React, { useState, useEffect } from "react";
// styles
import "./styles/App.scss";
import "./styles/Todos.scss";
// router-dom
import { Route, Routes } from "react-router-dom";
// components
import TodoComments from "./components/TodoComments/index.jsx";
// pages
import Login from "./pages/Login/index.jsx";
import Counter from "./pages/Counter/index.jsx";
import Todos from "./pages/Todos/index.jsx";
import Fetch from "./pages/Fetch/index.jsx";
import Welcome from "./pages/Welcome/index.jsx";
import PageNotFound from "./pages/404/index.jsx";
// context
import { AuthContext } from "./context/context";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuthorized(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
      }}
    >
      <div className="App">
        {isAuthorized ? (
          <Routes>
            <Route path="" element={<Welcome />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<TodoComments />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        ) : (
          <Login />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
