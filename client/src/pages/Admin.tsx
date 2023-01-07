// import { AddLink, Link, PubLink } from "../components"
import { AddLink, Link } from "../components"
import { ProImg } from "../utils"

// const a = {
//   title: "youtube",
//   link: "https://www.youtube.com/",
// }
export const Admin = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-200">
      <div className="flex max-[770px]:w-full flex-col items-center w-[60%] mt-20 border-gray-800 border-r h-[90%]">
        <AddLink />
        <div className="overflow-y-auto h-[80%] w-[100%]">
          <Link />
          <Link />
          <Link />
          <Link />
          <Link />
          <Link />
        </div>
      </div>
      <div className="flex max-[770px]:hidden justify-center w-[40%] h-[100%]">
        <div className="flex items-center my-auto h-[450px] w-[250px] object-scale-down bg-[url('https://assets.production.linktr.ee/6e83712f67b7ba91dc0d8c9f068bcdf161c0c7da/images/preview-device.svg')] bg-no-repeat">
          <div className="sticky bg-gray-300 rounded ml-4 h-[408px] w-[190px]">
          <div className="flex relative z-30 flex-col items-center justify-center w-full h-full">
            <ProImg url={"https://d1fdloi71mui9q.cloudfront.net/qr15XuYROmqho4619jF4_convert.jpg"} cls={"h-[70px] w-[70px] mt-4 rounded-full"} alt={"pro"} />
            <h3 className="mt-2 font-bold">hello</h3>
            <div className="overflow-y-auto h-[80%] w-[100%]">
              {/* <PubLink cls={"flex text-[12px]	mt-2 h-[30px] justify-center items-center rounded-lg mx-auto w-[90%] bg-white"} data={a} />
              <PubLink cls={"flex text-[12px] mt-2 h-[30px] justify-center items-center rounded-lg mx-auto w-[90%] bg-white"} data={a} />
              <PubLink cls={"flex text-[12px] mt-2 h-[30px] justify-center items-center rounded-lg mx-auto w-[90%] bg-white"} data={a} />
              <PubLink cls={"flex text-[12px] mt-2 h-[30px] justify-center items-center rounded-lg mx-auto w-[90%] bg-white"} data={a} /> */}
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}