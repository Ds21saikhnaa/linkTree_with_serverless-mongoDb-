import React from "react"
import { PageTwo } from "./PageTwo"
import { styles } from "../utils"
import { PageOne } from "./PageOne"
// import { Users } from "../components"
export const Home = () => {
  return (
    <div className="snap-y">
      <div style={styles.bgColor} className="flex max-[1100px]:flex-col max-[1100px]:h-96 flex-row w-screen min-h-screen max-[1100px]:h-fit">
        <div className="xl:w-6/12 max-[1100px]:w-full">
          <div className="px-20 max-[860px]:px-10">
            <h1 style={styles.txColor} className="font-extrabold align-baseline mt-56 max-[860px]:text-7xl  max-[560px]:text-5xl max-[360px]:text-3xl  text-3xl text-8xl font-bold">Everything you are. In one simple link.</h1>
            <p style={styles.txColor} className=" mt-2 text-2xl font-normal max-[860px]:text-xl max-[560px]:text-lg max-[360px]:text-base">Join 30M+ people and share everything you create, curate and sell online. All from the one link in bio.</p>
            <div className="flex flex-row max-[1000px]:justify-center">
              <input className="max-[700px]:w-3/5 pl-5 rounded-lg h-16 w-2/6 mt-10" placeholder="yourname"></input>
              <button className="max-[700px]:w-2/5 ml-2 font-bold w-4/12 bg-purple-300 h-16 rounded-full mt-10 max-[380px]:text-sm">Claim your linktree</button>
            </div>
          </div>
        </div>
        <div style={styles.bgColor} className="w-6/12 max-[1100px]:w-screen">
          <img className="pt-24" width="1280" height="1293" data-main-image=""  decoding="async" loading="lazy" src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png" alt="lol"></img>
        </div>
      </div>
      <PageOne />
      <PageTwo />
    </div>
  )
}