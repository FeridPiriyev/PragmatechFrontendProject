
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./components/Home"))
const Projects = lazy(() => import("./components/Projects"))
const Services = lazy(() => import("./components/Services"))
const Contact = lazy(() => import("./components/Contact"))
const Blog = lazy(() => import("./components/Blog"))
const About = lazy(() => import("./components/About"))

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div style={{width:"screen",height:"screen",display:"flex",zIndex:"999999"}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </>
  )
}
