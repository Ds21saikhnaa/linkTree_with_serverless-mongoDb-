import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  children?: any
}
export const Auth = createContext<any>(null);
export const AuthProvider = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const arr = window.location.pathname.split("/");
    const aut = localStorage.getItem('qwert');
    if (aut) {
      if (arr.length !== 3 && arr[1] !== "profile") {
        navigate('/admin')
        setUser(JSON.stringify(aut));
        setLoading(false);
      }
      setLoading(false);
    } else {
      if (location.pathname === '/admin') {
        navigate('/')
      }
      setLoading(false);
    }
  }, [location.pathname, navigate, user]);
  return (
    <>
    {loading ? (<>loading</>) : (
    <Auth.Provider value={{user, setUser}}>
      {children}
    </Auth.Provider>
    )}
    </>
  )
}