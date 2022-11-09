import {BrowserRouter} from 'react-router-dom'

import { ReactQueryProvider } from "./lib/react-query"

import { MainRoutes } from "./routes/main.routes"

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ReactQueryProvider>
  )
}

export default App
