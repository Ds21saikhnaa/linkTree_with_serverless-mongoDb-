export const PageTwo = () => {
  return (
    // <div className="w-screen h-screen bg-violet-900">
    <div className="flex max-[1100px]:flex-col max-[1100px]:h-96 flex-row w-screen min-h-screen max-[500px]:w-screen max-[1100px]:h-fit">
      <div className="xl:w-6/12 lg:w-7/12 max-[1100px]:mx-auto">
        <div className="px-20 max-[860px]:px-10">
          <h2 className="font-extrabold align-baseline mt-56 max-[860px]:text-7xl max-[560px]:text-5xl max-[360px]:text-3xl text-6xl">Hey I'm Saikhnaa. Made this website</h2>
          <p className="mt-4 text-2xl font-normal max-[860px]:text-xl max-[560px]:text-lg max-[360px]:text-base">I am fullstack developer. I am currently not working and if you are interested in me please contact me. My information is on the button below</p>
          <div className="flex flex-row max-[1000px]:justify-center">
            <button onClick={() => window.location.href="https://docs.google.com/document/d/17RHVo6KW-2lXlS6d8zWmSV0EvbFeevQYg0mi267JyFE/edit?usp=sharing"} className="hover:scale-105 font-bold max-[860px]:w-5/12 w-4/12 bg-purple-300 h-16 rounded-full mt-10 max-[380px]:text-sm">
                Click me
            </button>
          </div>
        </div>
        </div>
      <div className="w-6/12 h-screen max-[1100px]:w-screen">
      <img className="pt-24" data-main-image="" decoding="async" loading="lazy" src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png" alt="lol"></img>
      </div>
    </div>
  )
}