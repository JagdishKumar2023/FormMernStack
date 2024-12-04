import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Form/Signup";
import SignIn from "./Form/SignIn";
import PhotoUpload from "./PhotoUpload/PhotoUpload";

const App = () => {
  return (
    <div>
      <PhotoUpload />
      <Routes>
        <Route path="/" element={<Navigate to="/SignIn" />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
