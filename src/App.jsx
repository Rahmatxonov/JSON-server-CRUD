import React from "react";
import UserList from "./components/UserList";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
