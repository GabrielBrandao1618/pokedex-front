import { ReactQueryProvider } from "./lib/react-query"
import { Home } from "./pages/Home"

function App() {
  return (
    <ReactQueryProvider>
      <Home />
    </ReactQueryProvider>
  )
}

export default App
