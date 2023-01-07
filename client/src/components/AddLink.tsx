import { useState } from "react"
import { Btn, MyInput } from "../utils"

export const AddLink = () => {
  const [touch, setTouch] = useState<boolean>(false)
  return (
    <div className="w-full mt-20">
      {
        !touch ? (
          <div className="flex h-[50px] justify-center items-center rounded-full mx-auto w-[70%] bg-[#8129D9] cursor-pointer" onClick={() => { setTouch(!touch) }}>
            <p className="text-white text-[25px]">+</p>
            <p className="text-white text-center m-2">  Add link</p>
          </div>
        ) : (
            <div className="mx-auto max-[650px]:w-[90%] bg-white w-[70%] rounded-lg h-[150px]">
              <div className="flex justify-between">
                <p className="ml-5 mt-5">Enter URL</p>
                <p className="mr-5 mt-5 cursor-pointer" onClick={() => { setTouch(!touch) }}>X</p>
              </div>
              <div className="flex flex-row">
                <MyInput plach={"URL"} ty={"text"} cls={"mx-auto mt-4 px-5 bg-zinc-300 h-12 w-[80%] rounded-md"} />
                <Btn txt={"Add"} flag={false} cls={"mt-4 mr-4 bg-zinc-300 h-12 w-[10%] rounded-full"} />
              </div>
          </div>
        )
      }
    </div>
  )
}