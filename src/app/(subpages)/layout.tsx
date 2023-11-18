import Header from './components/header'
import type { ReactNode } from 'react'

export default function SubLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
