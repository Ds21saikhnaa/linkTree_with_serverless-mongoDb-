import { Btn } from "../utils"
type Promp = {
  value: string,
  value1: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setValue1: React.Dispatch<React.SetStateAction<string>>,
  addData: () => void
  touch: boolean
  setTouch: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddLink = ({value, value1, setValue, setValue1, addData, touch, setTouch}: Promp) => {
  return (
    <div className="w-full mt-20">
      {
        !touch ? (
          <div className="flex h-[50px] hover:scale-105 justify-center items-center rounded-full mx-auto w-[70%] bg-[#8129D9] cursor-pointer" onClick={() => { setTouch(!touch) }}>
            <p className="text-white text-[25px]">+</p>
            <p className="text-white text-center m-2">  Add link</p>
          </div>
        ) : (
            <div className="mx-auto max-[650px]:w-[90%] bg-white w-[70%] rounded-lg h-[200px]">
              <div className="flex justify-between">
                <p className="ml-5 mt-5">Enter URL</p>
                <p className="mr-5 mt-5 cursor-pointer hover:scale-125" onClick={() => { setTouch(!touch) }}>X</p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <input placeholder="Title" value={value1} onChange={(e) => setValue1(e.target.value)} type={"text"} className="mx-auto mt-4 px-5 bg-zinc-300 h-12 w-[80%] rounded-md"></input>
                  <input placeholder="URL" value={value} onChange={(e) => setValue(e.target.value)} type={"text"} className="mx-auto mt-4 px-5 bg-zinc-300 h-12 w-[80%] rounded-md"></input>
                </div>
                {!value || !value1 ? (
                  <Btn txt={"Add"} flag={true} cls={"my-auto mr-4 bg-zinc-600 h-12 w-[15%] rounded-full"} />  
                ) : (
                  <Btn txt={"Add"} func={addData} flag={false} cls={"my-auto mr-4 bg-zinc-300 h-12 w-[15%] rounded-full hover:scale-105"} />
                )}
              </div>
          </div>
        )
      }
    </div>
  )
}