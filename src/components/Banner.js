
const Banner = () => {
  return (
    <section className="my-4 w-full h-72 md:h-96 rounded-3xl flex flex-row justify-around items-center bg-gray-100 overflow-hidden">
    <div className="mt-24 mb-8 h-2/3 w-1/2 flex flex-col justify-around items-start">
      <h1 className="text-xl md:text-4xl font-bold">SPRING 2021</h1>
      <h1 className="text-xl md:text-4xl font-bold"> READY-TO-WEAR </h1>
      <h3 className="text-sm md:text-xl">We'll be saying "spring has sprung" before you know it</h3>
      <div className="relative group z-20 w-32 h-12">
        <button className="button-primary">
          Shop Now
        </button>
        <div className="button-primary-after group-hover:rotate-12" />
      </div>
    </div>
    <div className="hidden md:block">
      <img className="object-cover h-96" src="https://www.kindpng.com/picc/m/222-2220817_transparent-model-face-png-beautiful-women-png-png.png" alt="" />
    </div>
  </section>
  )
}

export default Banner
