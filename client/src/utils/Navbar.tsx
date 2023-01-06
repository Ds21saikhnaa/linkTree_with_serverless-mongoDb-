import { Log } from "../utils";
import { NavLink } from "react-router-dom"
// type Props = {
//   children: JSX.Element[],
// };
export const Navbar = () => {
  return (
    <div className="w-full fixed z-20 h-28">
      <div className="w-11/12 h-20 m-auto flex justify-between items-center mt-12 max-[500px]:mt-6 bg-white rounded-full">
          <div className="w-24 ml-5 lg:ml-10 lg:w-32 md:w-28 md:ml-5">
            <a href="/"><Log /></a>
        </div>
          <div className="flex items-center">
          <NavLink to="/login">
            <button className="lg:w-24 md:w-20 max-[500px]:w-20 font-bold mr-2 rounded-md bg-slate-200 h-14 flex justify-center items-center max-[360px]:text-sm">Log in</button>
            </NavLink>
          <NavLink to="/register">
           <button className="lg:w-40 md:w-36 max-[500px]:40 mr-4 font-bold rounded-full bg-slate-900 text-white h-14 flex max-[360px]:text-sm justify-center items-center">Sign up free</button>   
          </NavLink>
        </div>
      </div>
      </div>
  )
}