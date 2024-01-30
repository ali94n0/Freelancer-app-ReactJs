import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {Toaster} from "react-hot-toast"

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container xl:max-w-screen-xl flex justify-center">

    <QueryClientProvider client={
      queryClient
    }>
      <Toaster/>
    <Routes>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
    </QueryClientProvider>
      </div>
  );
}

export default App;
