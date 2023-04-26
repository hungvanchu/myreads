import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import ChangeBooks from "./ChangeBooks";

function App() {
  return (
    <Routes>
      <Route path="/*" element={
        <ChangeBooks />
      }/>
    </Routes>
  );
}

export default App;