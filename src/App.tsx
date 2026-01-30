import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="absolute bg-gray-800 text-center bottom-0 text-white inset-x-0 ">
        Developed by @zafraedu
      </footer>
    </div>
  )
}