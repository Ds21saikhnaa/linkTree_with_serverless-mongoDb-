import { useContext, useState } from "react";
import { Log } from "../utils";
import { NavLink } from "react-router-dom"
import { Auth } from "../context/Auth";
import { sendRequest } from "./Api";
export const Navbar = () => {
  const { user, setUser } = useContext(Auth);
  const [more, setMore] = useState<boolean>(false);
  let jad = JSON.stringify(localStorage.getItem('qwert'));
  let arr = jad.split(' ')
  let json = JSON.parse(arr[0])
  json = JSON.parse(json);
  const logOut = () => {
    localStorage.removeItem("qwert");
    setUser(null);
    setMore(false);
  }
  const deleteAcc = async (): Promise<void> => {
    try {
      await sendRequest(`user/${json.data._id}`, "DELETE", {}, json.token);
      setMore(false);
      logOut();
    } catch (e:any) {
      alert(e.message.toString());
    }
  }
  const copy = () => {
    const val = json.data.name
    navigator.clipboard.writeText(`http://localhost:3000/profile/${val}`)
  }
  return (
    <div className="w-full fixed z-20 h-28">
      <div className="w-11/12 h-20 m-auto flex justify-between items-center mt-12 max-[500px]:mt-6 bg-white rounded-full">
          <div className="w-24 ml-5 lg:ml-10 lg:w-32 md:w-28 md:ml-5">
            <a href="/"><Log /></a>
        </div>
        {user ? (
          <div className="flex items-center">
          <button onClick={copy} className="lg:w-24 hover:scale-105 md:w-20 max-[500px]:w-20 font-bold mr-2 rounded-md bg-slate-200 h-14 flex justify-center items-center max-[360px]:text-sm">Copy link</button>
            <button onClick={() => setMore(!more)} className="hover:scale-105 lg:w-40 md:w-36 max-[500px]:40 mr-4 font-bold rounded-full bg-slate-900 text-white h-14 flex max-[360px]:text-sm justify-center items-center">More</button> 
            {more ? (
            <div className="flex items-center justify-around flex-col w-[150px] right-[5.5%] rounded-lg h-[150px] absolute bg-slate-400 top-[85%]">
              <button onClick={deleteAcc} className="hover:scale-105 lg:w-36 md:w-30 max-[500px]:40 font-bold rounded-full bg-slate-900 text-white h-14 flex max-[360px]:text-sm justify-center items-center">Delete Account</button> 
              <button onClick={logOut} className="hover:scale-105 lg:w-36 md:w-30 max-[500px]:40 font-bold rounded-full bg-slate-900 text-white h-14 flex max-[360px]:text-sm justify-center items-center">Log Out</button> 
            </div>
            ) : (
                <></>
            )}
        </div>
          
        ) : (
          <div className="flex items-center">
            <NavLink to="/login">
              <button className="hover:scale-105 lg:w-24 md:w-20 max-[500px]:w-20 font-bold mr-2 rounded-md bg-slate-200 h-14 flex justify-center items-center max-[360px]:text-sm">Log in</button>
            </NavLink>
            <NavLink to="/register">
            <button className="hover:scale-105 lg:w-40 md:w-36 max-[500px]:40 mr-4 font-bold rounded-full bg-slate-900 text-white h-14 flex max-[360px]:text-sm justify-center items-center">Sign up free</button>   
            </NavLink>
          </div>
        )}
      </div>
      </div>
  )
}