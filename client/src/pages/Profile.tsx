import React from "react"
import { ProImg } from "../utils"
import { PubLink } from "../components"
const a = {
  link: "https://tailwindcss.com/docs/min-height",
  name: "hello"
}
export const Profile = () => {
  return (
    <div className="flex relative z-30 flex-col items-center justify-center w-screen h-screen bg-[gray]">
      <ProImg url={"https://d1fdloi71mui9q.cloudfront.net/qr15XuYROmqho4619jF4_convert.jpg"} cls={"h-[120px] w-[120px] max-[650px]:h-[80px] max-[650px]:w-[80px] mt-20 rounded-full"} alt={"pro"} />
      <h3 className="mt-4 font-bold">hello</h3>
      <div className="overflow-y-auto h-[80%] w-[100%]">
        <PubLink cls={"flex hover:scale-105 mt-10 max-[650px]:w-[90%] h-[60px] justify-center items-center rounded-lg mx-auto w-[50%] bg-white"} data={a} />
        <PubLink cls={"flex hover:scale-105 mt-10 max-[650px]:w-[90%] h-[60px] justify-center items-center rounded-lg mx-auto w-[50%] bg-white"} data={a} />
        <PubLink cls={"flex hover:scale-105 mt-10 max-[650px]:w-[90%] h-[60px] justify-center items-center rounded-lg mx-auto w-[50%] bg-white"} data={a} />
        <PubLink cls={"flex hover:scale-105 mt-10 max-[650px]:w-[90%] h-[60px] justify-center items-center rounded-lg mx-auto w-[50%] bg-white"} data={a} />
        </div>
    </div>
  )
}