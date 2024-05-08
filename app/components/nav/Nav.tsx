import Logo from "../Logo"
import Btns from "./Btns"

const Nav = () => {
  return (
    <nav className="flex justify-center z-20 w-full h-auto backdrop-blur-xl backdrop-saturate-150 bg-background/70 py-2 lg:py-4 rounded-b-2xl max-h-navHeight fixed top-0 ">
      <header className="w-full max-w-[1700px] flex items-center justify-around">
        <div className="h-full inline-block">
          <Logo />
        </div>
        <Btns />
      </header>
    </nav>
  )
}
export default Nav