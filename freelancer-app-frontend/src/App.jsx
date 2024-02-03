import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {Toaster} from "react-hot-toast"
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerDashboard from "./pages/OwnerDashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    {/* provider client for reactQuery */}
    <QueryClientProvider client={
      queryClient
    }>
      <Toaster/>
      {/* all routes */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="auth" element={<Auth/>}/>
      <Route path="complete-profile" element={<CompleteProfile/>}/>
      <Route element={<AppLayout/>}>
        <Route path="owner" element={<Navigate to={"/owner/dashboard"} replace/>}/>
        <Route path="owner/dashboard" element={<OwnerDashboard/>}/>
        <Route path="owner/projects" element={<Projects/>}/>
        <Route path="owner/projects/:id" element={<Project/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </QueryClientProvider>
      </>
  );
}

export default App;
