import LoginPage from "./components/LoginPage/LoginPage"
import {Navigate, Route,RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Responses from "./components/Responses/Responses"
import Layout from "./components/Layout"
import DashBoard from "./components/DashBoard/DashBoard"
import Agents from "./components/Agents/Agents"
import { useState } from "react"


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // Set isLoggedIn to true upon successful login
    setLoggedIn(true);

    // Redirect to the dashboard after login
    // navigate('/dashboard');
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route
        path="*"
        element={
          isLoggedIn ? (
            <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="" element={<DashBoard />} />
              <Route path="/responses" element={<Responses />} />
              <Route path="/agents" element={<Agents />} />
            </Route>
            </Routes>
            
            ) : (
              <Navigate to="/login"/>
              )
            }
            />
      <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
           
      </>
    )
  )

  return (
    <>
    <div className="flex w-full">
    <RouterProvider router={router}>
    </RouterProvider>
    </div>
    </>
  )
}

export default App
