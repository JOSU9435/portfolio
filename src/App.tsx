import { lazy, Suspense } from "react"
import Loader from "./components/Loader"

const Nav = lazy(() => import('./components/Nav'));
const Socials = lazy(() => import('./components/Socials'));
const Home = lazy(() => import('./pages/Home'));

function App() {

  return (
    <Suspense fallback={<Loader/>}>
      <Nav />
      <Socials />
      <Home />
    </Suspense>
  )
}

export default App
