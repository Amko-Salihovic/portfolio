const Hero = () => {
  return (
    <div className="text-slate-100 font-semibold text-6xl">
      <div className="absolute right-10 top-10 flex flex-col justify-center h-screen">
          <ul className="text-right uppercase hover:cursor-pointer">
            <li className="mb-10 hover:opacity-30 hover:text-8xl">about</li>
            <li className="mt-10 hover:opacity-30 hover:text-8xl">experience</li>
            <li className="mt-10 hover:opacity-30 hover:text-8xl">resume</li>
            <li className="mt-10 hover:opacity-30 hover:text-8xl">contact</li>
          </ul>
      </div>
    </div>
  )
}

export default Hero