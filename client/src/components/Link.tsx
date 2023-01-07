import { useState } from 'react'
import Switch from "react-switch";
export const Link = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [editName, setEditName] = useState<boolean>(false)
  const [editUrl, setEditUrl] = useState<boolean>(false)
  return (
    <div className="flex flex-col mt-10 max-[650px]:w-[90%] h-[100px] justify-center items-center rounded-lg mx-auto w-[70%] bg-white">
      <div className="flex w-full h-[50%] justify-between">
        {editName ? (
          <input className='ml-10 h-[30px] max-[650px]:ml-2 mt-4 w-[70%]'></input>
        ) : (
        <div className='flex' onClick={() => setEditName(true)}>
          <p className="ml-10 font-bold max-[650px]:ml-2 mt-4">leetcode</p>
          <svg color="palette.slate4" fontStyle="italic" viewBox="0 0 12 12" enableBackground="new 0 0 24 24" className="w-[10px] mt-2 ml-2"><path d="M2.5,6.67188,8.46477.70711a1,1,0,0,1,1.41421,0L11.29289,2.121a1,1,0,0,1,0,1.41421L5.32813,9.5ZM4.32813,10.5,0,12,1.5,7.67188Z"></path></svg>
        </div>
        )}
        <Switch className="mr-10 max-[650px]:mr-2 mt-4" offHandleColor={"#A8A1A0"} onHandleColor={"#A8A1A0"} height={20} width={40} onChange={setEnabled} checked={enabled} />
      </div>
      <div className="flex w-full h-[50%] justify-between">
      {editUrl ? (
          <input className='ml-10 max-[650px]:ml-2 mt-2 h-[30px] w-[70%]'></input>
        ) : (
        <div className='flex' onClick={() => setEditUrl(true)}>
          <p className="ml-10 font-serif max-[650px]:ml-2 mt-4">https://leetcode.com/dashmandalsaikhanbileg/</p>
          <svg color="palette.slate4" fontStyle="italic" viewBox="0 0 12 12" enableBackground="new 0 0 24 24" className="w-[10px] mt-2 ml-2"><path d="M2.5,6.67188,8.46477.70711a1,1,0,0,1,1.41421,0L11.29289,2.121a1,1,0,0,1,0,1.41421L5.32813,9.5ZM4.32813,10.5,0,12,1.5,7.67188Z"></path></svg>
        </div>
        )}
        <div className="mr-10 max-[650px]:mr-2"><svg className='w-4 mt-2' viewBox="0 0 16 16" display="block" enableBackground="new 0 0 24 24" ><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"></path></svg></div>
      </div>
    </div>
  )
}