import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {Toaster} from "react-hot-toast"
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerDashboard from "./pages/OwnerDashboard";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import ProjectsFreelancer from "./pages/ProjectsFreelancer";

const queryClient = new QueryClient();

function App() {

  
  return (
    <>
    {/* darkmode provider */}
    <DarkModeProvider>
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
      <Route path="/owner" element={<OwnerLayout/>}>
        <Route index  element={<Navigate to={"dashboard"} replace/>}/>
        <Route path="dashboard" element={<OwnerDashboard/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="projects/:id" element={<Project/>}/>
      </Route>
      <Route path="/freelancer" element={<FreelancerLayout/>}>
        <Route index element={<Navigate to={"dashboard"}/>}/>
        <Route path="dashboard" element={<FreelancerDashboard/>}/>
        <Route path="projects" element={<ProjectsFreelancer/>}/>
        <Route path="proposals" element={<Proposals/>}/>

      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </QueryClientProvider>
      </DarkModeProvider>
      </>
  );
}

export default App;
