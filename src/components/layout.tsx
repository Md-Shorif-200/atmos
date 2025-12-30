import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
  return (
    <div>
                <header>
                     <Header/>
                </header>
      
                        <Outlet/>
          <footer>
             footer
          </footer>
    </div>
  )
}
