import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import Updateprofile from "./pages/Updateprofile";
import About from "./pages/About";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/admin/Dashboard";
import Adminalluser from "./pages/admin/Adminalluser";
import Admingetapproveduser from "./pages/admin/Admingetapproveduser";
import SelectedCategory from './pages/SelectedCategory'
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Chat from "./pages/Chat";
import { Toaster} from 'sonner'
import AuthLayout from "./components/AuthLayout";
import Pagenotfound from "./pages/Pagenotfound";
import Approval from "./pages/Approval";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { Puff } from "react-loader-spinner";

function App() {

  const dispatch = useDispatch();

  const {isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated){
      dispatch(loadUser());
    }
  }, [isAuthenticated]);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        }/>
        <Route path="/approval" element={
          <AuthLayout>
            <Approval />
          </AuthLayout>
        }/>
        <Route path="/login" element={
          <Login />
        } />
        <Route path="/register" element={
          <Register />
        } />
        <Route path="/profile" element={
        <AuthLayout>
            <Profile />
        </AuthLayout>
        } />
        <Route path="/updateprofile" element={
        <AuthLayout>
            <Updateprofile />
        </AuthLayout>
        } />
        <Route path="/category" element={
          <Category />
        } />
        <Route path="/category/:slug" element={
          <SelectedCategory />
        } />
        <Route path="/about" element={
          <About />
        } />
        {/* isAuthenticate ? <Navigate to="/myprofile" /> : */}
        <Route path="/forgetPassword" element={
        <AuthLayout >
            <ForgetPassword />
        </AuthLayout>
        } />
        <Route path="/resetPassword/:token" element={
        <AuthLayout >
            <ResetPassword />
        </AuthLayout>
        } />
        <Route path="/admin/dashboard" element={
        <AuthLayout userRole ={true}>
           <Dashboard />
        </AuthLayout>
       } />
        <Route path="*" element={
          <Pagenotfound />
        } />
        <Route path="/getallusers" element={
        <AuthLayout userRole={true}>
          <Adminalluser />
        </AuthLayout>
        } />
        <Route path="/getapprovedusers" element={
        <AuthLayout userRole={true}>
          <Admingetapproveduser />
        </AuthLayout>
        } />
        <Route path="/chat" element={
        <AuthLayout>
          <Chat />
        </AuthLayout>
        } />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
