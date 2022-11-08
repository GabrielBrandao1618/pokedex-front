import { ReactNode } from 'react'
import {QueryClient, QueryClientProvider, QueryClientProviderProps} from 'react-query'

export const reactQueryClient = new QueryClient()

interface ReactQueryProviderProps {
  children: ReactNode;
}

export function ReactQueryProvider({children}: ReactQueryProviderProps){
  return (
    <QueryClientProvider client={reactQueryClient}>
      {children}
    </QueryClientProvider>
  )
}