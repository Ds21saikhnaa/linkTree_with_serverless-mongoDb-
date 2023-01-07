import { createContext, useContext } from "react";

type Props = {
  children?: JSX.Element[]
}
export const Auth = createContext<null>(null);
// export const AuthProvider = () => {
export const AuthProvider = ({children}: Props) => {
  return (
    <>d</>
    // <Auth.Provider>
    //   {children}
    // </Auth.Provider>
  )
}