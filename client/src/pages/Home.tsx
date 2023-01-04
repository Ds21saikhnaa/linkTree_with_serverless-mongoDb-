import React from "react"
// import { Users } from "../components"
export const Home = () => {
  return (
    <div className="snap-y">
      <div className="flex max-[1000px]:flex-col max-[1000px]:h-96 flex-row bg-lime-900 w-screen min-h-screen">
        <div className="xl:w-6/12 lg:w-7/12">
          <h1 style={{color:"#D2E223"}} className="font-extrabold align-baseline mt-56 max-[860px]:text-7xl max-[860px]:px-10 max-[560px]:text-5xl px-20 text-3xl text-8xl font-bold">Everything you are. In one simple link.</h1>
          <p style={{ color: "#D2E223" }} className="px-20 mt-2 text-2xl font-normal max-[860px]:text-xl max-[860px]:px-10 max-[560px]:text-lg">Join 30M+ people and share everything you create, curate and sell online. All from the one link in bio.</p>
          <div className="flex flex-row max-[1000px]:justify-center">
            <input className="ml-20 max-[1000px]:ml-0 pl-5 rounded-lg h-16 w-2/6 mt-10" placeholder="yourname"></input>
            <button className="ml-2 w-3/12 bg-purple-300 h-16 rounded-full mt-10">Claim your linktree</button>
        </div>
        </div>
        {/* style="object-fit: contain; object-position: center center; opacity: 1;" */}
        <div className="bg-lime-900 w-6/12 max-[1000px]:w-screen">
          <img className="mt-16" width="1280" height="1293" data-main-image="" sizes="(min-width: 1280px) 1280px, 100vw" decoding="async" loading="lazy" src="https://linktr.ee/_gatsby/image/36f18e9b5a33855dac94312b21c4f26a/7b92f8eae862811a6a5dff3b01ab8644/LinktreeLinkApps.avif?eu=040dd3f3f6e20c2cbf40f3571a1a364c36515ab817fbf424efc9e6dddcfe08d7557dd87dba0e21b832ceacb62c3570cf600e150e7ceaeb1c5d03498030ff4fb66f527758deb90567a3b28901e1871879eae1d99f231d3cdcf47a501b9b2664fbda366413c654954bf0c6950377830b49bae0bfad827ab251f48d5c450a1def996b7ab83c72b5aaecb5357ed40a4d8260d4c39b93372c38226ddeb4ddccb88ce1b195e54cab26&a=w%3D1280%26h%3D1293%26fm%3Davif%26q%3D75&cd=d374f675281081c084e66ecdda1946bd" alt="lol"></img>
          {/* <img className="bg-auto" src="https://website.linktr.ee/static/37a659139719e5490559e480b92e961d/719cf/bg.webp" alt="e"/> */}
        </div>
      </div>
      <div className="w-screen h-screen bg-lime-400">
        {/* <Users/> */}
      </div>
      <div className="w-screen h-screen bg-lime-200">
        <p className="text-3xl font-bold underline text-red-700">home page</p>
      </div>
    </div>
  )
}