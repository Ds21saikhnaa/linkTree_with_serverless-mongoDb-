import { data } from "../utils/Log"

export const Users = () => {
  return (
    <div className="flex w-screen h-2/5 bg-orange flex-row snap-mandatory snap-x">
      {data.map((el, ind) => (
        <div key={ind} className="snap-center w-2/5 h-2/5">
        <img className="w-max h-max bg-cover" src={el.url} alt="pro"/>
      </div>
      ))}
    </div>
  )
}