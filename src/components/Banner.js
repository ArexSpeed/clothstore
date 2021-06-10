
const Banner = () => {
  return (
    <section className="my-4 w-full h-96 rounded-3xl flex flex-row justify-around items-center bg-gray-100 overflow-hidden">
    <div className="mt-24 mb-8 h-2/3 w-1/2 flex flex-col justify-around items-start">
      <h1 className="text-4xl font-bold">SPRING 2021</h1>
      <h1 className="text-4xl font-bold"> READY-TO-WEAR </h1>
      <h3 className="text-xl">We'll be saying "spring has sprung" before you know it</h3>
      <div className="relative group z-20 w-32 h-12">
        <button className="relative z-20 w-32 h-12 bg-black text-gray-300 text-center rounded-lg">
          Shop Now
        </button>
        <div className="absolute top-0 left-0 transform -rotate-12 transition duration-200 w-full h-full bg-green-300 rounded-lg z-10 group-hover:rotate-12" />
      </div>
    </div>
    <div>
      <img className="object-cover h-96" src="https://www.kindpng.com/picc/m/222-2220817_transparent-model-face-png-beautiful-women-png-png.png" alt="" />
    </div>
  </section>
  )
}

export default Banner
