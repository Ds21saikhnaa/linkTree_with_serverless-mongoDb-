import React, { useEffect, useState } from "react"
import { ProImg } from "../utils"
import { PubLink } from "../components"
import { useParams } from 'react-router-dom';
import { Data, User } from "../interfaces"
import { sendRequest } from "../utils/Api"
import { NotFound } from "./NotFound";
export const Profile = () => {
  const { name: val } = useParams();
  const [res, setRes] = useState<Data[]>([]);
  const [usr, setUsr] = useState<User[]>([]);
  const [fail, setFail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const { data } = await sendRequest(`getLink/${val}`, "GET");
        setRes(data.data);
        setUsr(data.user)
      } catch (e: any) {
        setFail(true)
        setLoading(false)
      }
    }
    getData();
    !res?.length ? setLoading(true) : setLoading(false);
  }, [res?.length, val])
  return (
    <>
      {loading ? (
        <div className="flex relative z-30 flex-col items-center justify-center w-screen h-screen bg-[gray]">loading</div>
      ) : (
            fail ? (
            <NotFound />
          ) : (
            <div className="flex relative z-30 flex-col items-center justify-center w-screen h-screen bg-[gray]">
              <div className="flex relative z-30 flex-col items-center justify-center w-screen h-screen bg-[gray]">
              <ProImg url={usr[0]?.proFile} cls={"h-[120px] w-[120px] max-[650px]:h-[80px] max-[650px]:w-[80px] mt-20 rounded-full"} alt={"pro"} />
                <h3 className="mt-4 font-bold">{usr[0]?.name}</h3>
                <div className="overflow-y-auto h-[80%] w-[100%]">
                  {res.map((el, ind) => (
                    <PubLink key={ind} cls={"flex hover:scale-105 mt-10 max-[650px]:w-[90%] h-[60px] justify-center items-center rounded-lg mx-auto w-[50%] bg-white"} data={el} />
                  ))}
              </div>
            </div>
          </div>  
          )
      )}
    </>
  )
}