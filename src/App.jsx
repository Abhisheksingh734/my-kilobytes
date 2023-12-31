import LoginPage from "./components/loginPage"
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Responses from "./components/Responses"
import Layout from "./components/Layout"
import DashBoard from "./components/DashBoard"
import Agents from "./components/Agents"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<DashBoard/>}/>
        <Route path="responses" element={<Responses/>}/>
        <Route path="agents" element={<Agents/>}/>
      </Route>
      </>
    )
  )

  return (
    <>
    <div className="flex h-screen">
    <RouterProvider router={router}>
    </RouterProvider>
    </div>
    </>
  )
}

export default App
