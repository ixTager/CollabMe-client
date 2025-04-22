import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "../pages/Main"
import NotFound from "../pages/NotFound"
import Auth from "../pages/Auth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/"/>
        <Route element={<Auth />} path="/auth" />
        <Route element={<NotFound />} path="*"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
