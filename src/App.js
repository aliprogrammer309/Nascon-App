import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Competitions from "./components/Competitions";
import Events from "./components/Events";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateNewBlog from "./components/CreateNewBlog";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Footer from "./components/Footer";
import EventRegisteration from "./components/EventRegisteration";
import EventFeeChallan from "./components/EventFeeChallan";
import CompetitionRegisteration from "./components/CompetitionRegisteration";
import RegisterationRecied from "./components/RegisterationRecied";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/Login" />;
  };

  return (
    <>
      <Navbar profile={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route
          path="Events"
          element={
            <RequireAuth>
              <Events />
            </RequireAuth>
          }
        />
        <Route
          path="EventRegisteration"
          element={
            <RequireAuth>
              <EventRegisteration />
            </RequireAuth>
          }
        />
        <Route
          path="EventFeeChallan"
          element={
            <RequireAuth>
              <EventFeeChallan />
            </RequireAuth>
          }
        />
        <Route
          path="CompetitionRegisteration"
          element={
            <RequireAuth>
              <CompetitionRegisteration />
            </RequireAuth>
          }
        />
        <Route
          path="Competitions"
          element={
            <RequireAuth>
              <Competitions />
            </RequireAuth>
          }
        />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        {/* <Route path="CreateNewBlog" element={<CreateNewBlog />} /> */}
        <Route path="registerationRecied" element={<RegisterationRecied />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
