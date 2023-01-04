import { Log } from "../utils";
export const Navbar = () => {
  return (
    <div className="w-full fixed z-20 h-28">
      <div className="w-11/12 h-20 m-auto flex justify-between items-center mt-12 bg-white rounded-full">
        <div className="w-24 ml-5 lg:ml-10 lg:w-32 md:w-28 md:ml-5">
          <Log />
        </div>
        <div className="flex items-center">
          <button className="lg:w-24 md:w-20 font-mono mr-2 rounded-md bg-slate-200 h-14 flex justify-center items-center">Log in</button>
          <button className="lg:w-40 md:w-36 mr-4 font-mono rounded-full bg-slate-900 text-white h-14 flex justify-center items-center">Sign up free</button>
        </div>
      </div>
    </div>
  )
}