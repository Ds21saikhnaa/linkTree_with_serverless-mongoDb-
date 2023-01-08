import { PubLink } from "../components"
import { useEffect, useState } from "react";
import { AddLink, Link } from "../components"
import { ProImg } from "../utils"
import { sendRequest } from "../utils/Api";
import { Data } from "../interfaces";
export const Admin = () => {
  const [data, setData] = useState<Data[]>([]);
  const [res, setRes] = useState<Data[]>([]);
  const [value, setValue] = useState<string>("")
  const [value1, setValue1] = useState<string>("")
  const [touch, setTouch] = useState<boolean>(false);
  let jad = JSON.stringify(localStorage.getItem('qwert'));
  let arr = jad.split(' ')
  let json = JSON.parse(arr[0])
  json = JSON.parse(json);
  const adToken = json.token;
  const adName = json.data.name;
  const adImg = json.data.proFile;
  const addData = async (): Promise<void> => {
    try {
      await sendRequest(`createLink`, "POST",
        {
          "link": value,
          "title": value1
        },
        adToken);
      setValue1("")
      setValue("")
      setTouch(false);
      const ref = () => {
        window.location.reload()
      } 
      setTimeout(ref, 3000);
    } catch (error: any) {
      const a = error.response.data
      alert(a.error.message)
    }
  }
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await sendRequest(`getAdmin`, "GET", {}, adToken);
      setData(data.data)
    }
    const getDatas = async (): Promise<void> => {
      try {
        const { data } = await sendRequest(`getLink/${adName}`, "GET");
        setRes(data.data);
      } catch (e: any) {
        const a = e.response.data
        alert(a.error.message)
      }
    }
    getDatas()
    getData()
  }, [adName, adToken, setData])
  
  
  return (
    <div className="flex w-screen h-screen bg-gray-200">
      <div className="flex max-[770px]:w-full flex-col items-center w-[60%] mt-20 border-gray-800 border-r h-[90%]">
        <AddLink touch={touch} setTouch={setTouch} value={value} value1={value1} setValue={setValue} setValue1={setValue1} addData={ addData } />
        <div className="overflow-y-auto h-[80%] w-[100%]">
          {!data.length ? (
            <div className="flex flex-col mt-10 max-[650px]:w-[90%] h-[100px] justify-center items-center rounded-lg mx-auto w-[70%] bg-white">no Data</div>
          ) : (
            data.map((el, ind) => (
              <Link key={ind} data={el} />
            ))
          )}
        </div>
      </div>
      <div className="flex max-[770px]:hidden justify-center w-[40%] h-[100%]">
        <div className="flex items-center my-auto h-[450px] w-[250px] object-scale-down bg-[url('https://assets.production.linktr.ee/6e83712f67b7ba91dc0d8c9f068bcdf161c0c7da/images/preview-device.svg')] bg-no-repeat">
          <div className="sticky bg-gray-300 rounded ml-4 h-[408px] w-[190px]">
          <div className="flex relative z-30 flex-col items-center justify-center w-full h-full">
            <ProImg url={adImg} cls={"h-[70px] w-[70px] mt-4 rounded-full"} alt={"pro"} />
              <h3 className="mt-2 font-bold">{adName}</h3>
              <div className="overflow-y-auto h-[80%] w-[100%]">
                {
                  res.map((el, ind) => (
                        <PubLink key={ind} cls={"flex hover:scale-105 h-fit mt-5 min-h-[40px] justify-center items-center text-[10px] font-bold	 rounded-lg mx-auto w-[90%] bg-white"} data={el} />
                  ))  
                }
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}