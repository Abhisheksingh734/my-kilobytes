import LoginPage from "./components/LoginPage/LoginPage"
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Responses from "./components/Responses/Responses"
import Layout from "./components/Layout"
import DashBoard from "./components/DashBoard/DashBoard"
import Agents from "./components/Agents/Agents"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<DashBoard/>}/>
        <Route path="responses" element={<Responses/>}/>
        <Route path="agents" element={<Agents/>}/>
      </Route>
      <Route path="login" element={<LoginPage/>}/>
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
