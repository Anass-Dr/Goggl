import { useState } from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Main from "./components/Main";
import SearchContextProvider from "./context/SearchContextProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [currTab, setCurrTab] = useState("all");

  const handleTheme = () => setDarkTheme((value) => !value);
  const handleTab = (tabName) => setCurrTab(tabName);

  return (
    <Routes>
      <Route
        path="/Goggl/search"
        element={
          <>
            <div className={`${darkTheme ? "dark " : ""}`}>
              <div className="min-h-screen bg-slate-100 dark:bg-primary">
                <SearchContextProvider currTab={currTab}>
                  <Navbar dark={darkTheme} handleTheme={handleTheme} />
                  <Tabs handleTab={handleTab} />
                  <Main currTab={currTab} />
                </SearchContextProvider>
              </div>
            </div>
          </>
        }
      ></Route>
      <Route
        path="/Goggl"
        exact
        element={<Navigate to="/Goggl/search" />}
      ></Route>
    </Routes>
  );
}

export default App;
