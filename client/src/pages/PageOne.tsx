import { NavLink } from "react-router-dom"
import { styles } from "../utils"

export const PageOne = () => {
  return (
      <div style={styles.bgColor1} className="flex max-[1100px]:flex-col max-[1100px]:h-96 flex-row w-screen min-h-screen max-[500px]:w-screen max-[1100px]:h-fit">
      <div className="xl:w-6/12 lg:w-7/12 max-[1100px]:mx-auto">
        <div className="px-20 max-[860px]:px-10">
          <h2 style={styles.txColor1} className="font-extrabold align-baseline mt-56 max-[860px]:text-7xl max-[560px]:text-5xl max-[360px]:text-3xl text-6xl">Share your Linktree anywhere you like!</h2>
          <p style={styles.txColor1} className="mt-4 text-2xl font-normal max-[860px]:text-xl max-[560px]:text-lg max-[360px]:text-base">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
          <div className="flex flex-row max-[1000px]:justify-center">
            <button className="hover:scale-105 font-bold max-[860px]:w-5/12 w-4/12 bg-purple-300 h-16 rounded-full mt-10 max-[380px]:text-sm">
              <NavLink to="/register">
                Get started for free
              </NavLink>
            </button>
          </div>
        </div>
        </div>
      <div className="w-6/12 max-[1100px]:w-screen">
      <img className="pt-24" width="1280" height="1293" data-main-image="" decoding="async" loading="lazy" src="https://linktr.ee/_gatsby/image/36f18e9b5a33855dac94312b21c4f26a/7b92f8eae862811a6a5dff3b01ab8644/LinktreeLinkApps.avif?eu=040dd3f3f6e20c2cbf40f3571a1a364c36515ab817fbf424efc9e6dddcfe08d7557dd87dba0e21b832ceacb62c3570cf600e150e7ceaeb1c5d03498030ff4fb66f527758deb90567a3b28901e1871879eae1d99f231d3cdcf47a501b9b2664fbda366413c654954bf0c6950377830b49bae0bfad827ab251f48d5c450a1def996b7ab83c72b5aaecb5357ed40a4d8260d4c39b93372c38226ddeb4ddccb88ce1b195e54cab26&a=w%3D1280%26h%3D1293%26fm%3Davif%26q%3D75&cd=d374f675281081c084e66ecdda1946bd" alt="lol"></img>
      </div>
      </div>
  )
}