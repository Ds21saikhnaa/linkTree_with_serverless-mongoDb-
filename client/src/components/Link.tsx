import { useState } from 'react'
import Switch from "react-switch";
import { Data } from '../interfaces';
import { sendRequest } from '../utils/Api';
type Promp = {
  data: Data
}
export const Link = ({data}: Promp) => {
  const [enabled, setEnabled] = useState<boolean>(data.isHide);
  const [editName, setEditName] = useState<boolean>(false)
  const [editUrl, setEditUrl] = useState<boolean>(false)
  const [name, setName] = useState<string>(data.title);
  const [url, setUrl] = useState<string>(data.link);
  let j = JSON.stringify(localStorage.getItem('qwert'));
  let arr = j.split(' ')
  let json = JSON.parse(arr[0])
  json = JSON.parse(json);
  const token = json.token;
  const ref = () => {
    window.location.reload()
  } 
  const del = async (id: string): Promise<void> => {
    try {
      await sendRequest(`link/${id}`, "DELETE", {}, token);
      setTimeout(ref, 2000);
    } catch (e: any) {
      const a = e.response.data
      alert(a.error.message)
    }
  }
  const editBol = async (id: string): Promise<void> => {
    try {
      await sendRequest(`link/${id}`, "PATCH", {"isHide": !enabled}, token);
      setEnabled(!enabled) 
      setTimeout(ref, 1500);
    } catch (e:any) {
      const a = e.response.data
      alert(a.error.message)
    }
  }
  const edit = async (id: string): Promise<void> => {
    try {
      await sendRequest(`link/${id}`, "PATCH",
        {
          "link": url,
          "title": name
        },
        token);
      setTimeout(ref, 1500);
    } catch (e:any) {
      const a = e.response.data
      alert(a.error.message)
    }
  }
  return (
    <div className="flex flex-col mt-10 max-[650px]:w-[90%] h-[100px] justify-center items-center rounded-lg mx-auto w-[70%] bg-white">
      <div className="flex w-full h-[50%] justify-between">
        {editName ? (
          <>
            <input value={name} onChange={(e) => setName(e.target.value)} className='ml-10 h-[30px] max-[650px]:ml-2 mt-4 w-[70%]'></input>
            <button className='mr-10 h-[30px] mt-4 rounded-lg max-[650px]:mr-2 bg-slate-900 text-white' onClick={() => setEditName(false)}>done</button>
          </>
        ) : (
            <>
          <div className='flex w-[70%]' onClick={() => setEditName(true)}>
            <p className="ml-10 font-bold max-[650px]:ml-2 truncate mt-4">{name}</p>
            <svg color="palette.slate4" fontStyle="italic" viewBox="0 0 12 12" enableBackground="new 0 0 24 24" className="w-[10px] mt-2 ml-2"><path d="M2.5,6.67188,8.46477.70711a1,1,0,0,1,1.41421,0L11.29289,2.121a1,1,0,0,1,0,1.41421L5.32813,9.5ZM4.32813,10.5,0,12,1.5,7.67188Z"></path></svg>
          </div>
          <Switch className="mr-10 max-[650px]:mr-2 mt-4" offHandleColor={"#A8A1A0"} onHandleColor={"#A8A1A0"} height={20} width={40} onChange={() => editBol(data._id)} checked={enabled} />
            </>
        )}
      </div>
      <div className="flex w-full h-[50%] justify-between">
        {editUrl ? (
          <>
            <input value={url} onChange={(e) => setUrl(e.target.value)} className='ml-10 max-[650px]:ml-2 mt-2 h-[30px] w-[70%]'></input>
            <button className='mr-10 h-[30px] rounded-lg max-[650px]:mr-2 bg-slate-900 text-white' onClick={() => setEditUrl(false)}>done</button>
          </>
        ) : (
            <>
          <div className='flex w-[70%]' onClick={() => setEditUrl(true)}>
                <p className="ml-10 font-serif truncate max-[650px]:ml-2 mt-4">{url}</p>
            <svg color="palette.slate4" fontStyle="italic" viewBox="0 0 12 12" enableBackground="new 0 0 24 24" className="w-[10px] max-[650px]:w-[16px] mt-2 ml-2"><path d="M2.5,6.67188,8.46477.70711a1,1,0,0,1,1.41421,0L11.29289,2.121a1,1,0,0,1,0,1.41421L5.32813,9.5ZM4.32813,10.5,0,12,1.5,7.67188Z"></path></svg>
              </div>
              {
                url === data.link && name === data.title ? (
                  <div onClick={() => del(data._id)} className="mr-10 max-[650px]:mr-2"><svg className='w-4 mt-2' viewBox="0 0 16 16" display="block" enableBackground="new 0 0 24 24" ><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"></path></svg></div>
                ) : (
                  <button className='mr-10 h-[30px] rounded-lg max-[650px]:mr-2 bg-slate-900 text-white' onClick={() => edit(data._id)}>update</button>
                )
              }
            </>
        )}
      </div>
    </div>
  )
}