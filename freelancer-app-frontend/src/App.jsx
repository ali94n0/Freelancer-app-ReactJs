import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {Toaster} from "react-hot-toast"
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container xl:max-w-screen-xl flex justify-center">
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
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </QueryClientProvider>
      </div>
  );
}

export default App;
