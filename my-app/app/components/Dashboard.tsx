import { FaRegLightbulb, FaTv } from "react-icons/fa";
import { FaThermometerHalf, FaTint, FaBolt, FaWind } from 'react-icons/fa';
import { MdLightbulbOutline } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuPrinter, LuCoffee } from "react-icons/lu";
import { CiMusicNote1,CiDroplet } from "react-icons/ci";
import { IoRainyOutline } from "react-icons/io5";



const Dashboard = () => {
  return (
    <div className="ml-20 p-6 grid grid-cols-12 grid-rows-12 gap-4 h-[760px] ">

      {/* Cuadro de Clima - Se expande en varias filas y columnas */}
      <div className="col-span-12 sm:col-span-6 md:col-span-3 row-span-6 bg-gray-900 text-white p-6 rounded-2xl border-[1px] border-gray-200 : ">
        <h2 className="text-lg font-semibold">Clima</h2>
        <p>23°C | Soleado</p>

        {/* Contenedor vertical de íconos */}
        <div className="flex flex-col mt-4 space-y-4">
          <div className=' flex justify-between px-5 mt-5'>
            <div className='flex space-x-2 '>
              <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
                <FaWind className='text-black text-[20px] rounded-full  ' />
              </button>
              <div className=''>
                <h1>
                  Lamps
                </h1>
                <h1>
                  10 DEVICES
                </h1>
              </div>
            </div>

            <div className=''>
              <h1>
                78
              </h1>
              <h1>
                KW
              </h1>
            </div>
          </div>

          <div className=' flex justify-between px-5 mt-5'>
            <div className='flex space-x-2 '>
              <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
                <CiDroplet className='text-black text-[20px] rounded-full  ' />
              </button>
              <div className=''>
                <h1>
                  Lamps
                </h1>
                <h1>
                  10 DEVICES
                </h1>
              </div>
            </div>

            <div className=''>
              <h1>
                78
              </h1>
              <h1>
                KW
              </h1>
            </div>
          </div>

          <div className=' flex justify-between px-5 mt-5'>
            <div className='flex space-x-2 '>
              <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
                <IoRainyOutline className='text-black text-[20px] rounded-full  ' />
              </button>
              <div className=''>
                <h1>
                  Lamps
                </h1>
                <h1>
                  10 DEVICES
                </h1>
              </div>
            </div>

            <div className=''>
              <h1>
                78
              </h1>
              <h1>
                KW
              </h1>
            </div>
          </div>


          <div>
            <p className="text-center">See all</p>
          </div>
        </div>
      </div>

      {/* Cuadro de Consumo de Luz - Abarca 6 columnas */}
      <div className="col-span-12 sm:col-span-10 md:col-span-9 row-span-7 text-black bg-white  p-6 rounded-2xl h-screen ">
        <h2 className="text-2xl font-semibold ">HI ANN</h2>


        {/* Cuadro con fondo de imagen */}
        <div
          className="mt-4 p-32 relative rounded-md"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=600")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Indicador de 'Live' con punto rojo */}
          <div className="absolute top-4 left-4 flex items-center  w-full ">
            <span className="bg-red-500 rounded-full w-3 h-3 mr-2"></span>
            <span className="text-white text-sm font-semibold">Live</span>

            {/* Iconos con sus valores */}
            <div className="flex space-x-6 bottom-6 left-0 w-full items-center bg-opacity-70 justify-end  ">
              {/* Termómetro */}
              <div className="flex items-center text-white">
                <FaThermometerHalf className="mr-1" />
                <span>20°C</span>
              </div>
              {/* Gota */}
              <div className="flex items-center text-white">
                <FaTint className="mr-1" />
                <span>30%</span>
              </div>

              {/* Rayo */}
              <div className="flex items-center text-white">
                <FaBolt className="mr-1" />
                <span>250W</span>
              </div>

              {/* Viento */}
              <div className="flex items-center text-white">
                <FaWind className="mr-1" />
                <span>30%</span>
              </div>
            </div>
          </div>

          {/* Reproductor de música */}
          <div className="absolute bottom-6 left-0 w-full flex items-center justify-between p-4 bg-opacity-70 bg-black rounded-md">

            {/* Imagen del reproductor */}
            <div className="flex items-center">
              <img
                src="https://lastfm.freetls.fastly.net/i/u/300x300/6c47d45efe7903b415295b1201cab945.jpg"
                alt="Album Art"
                className="w-12 h-12 rounded-md mr-4"
              />
              <div>
                <p className="text-white font-semibold">querer querernos</p>
                <p className="text-gray-400 text-sm">Canserbero-Canserbero</p>
              </div>
            </div>
            <div >
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-5">
          {/* Card 1 */}
          <div className="w-full sm:w-80 md:w--96 lg:w-1/3 xl:w-[380px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-[500px] ">
              <img
                src="https://images.pexels.com/photos/28182514/pexels-photo-28182514/free-photo-of-madera-ligero-calle-hotel.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card Image"
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-black">
                <div className=' rounded-xl bg-slate-200 opacity-40 '>

                  <div className=' flex justify-between px-5 mt-5'>
                    <div className='flex space-x-2 '>
                      <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
                        <MdLightbulbOutline className='text-black text-[20px] rounded-full  ' />
                      </button>
                      <div className=''>
                        <h1>
                          Lamps
                        </h1>
                        <h1>
                          10 DEVICES
                        </h1>
                      </div>
                    </div>

                    <div className=''>
                      <h1>
                        78
                      </h1>
                      <h1>
                        KW
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-80 md:w--96 lg:w-1/3 xl:w-[380px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-[500px] ">
              <img
                src="https://images.pexels.com/photos/28182514/pexels-photo-28182514/free-photo-of-madera-ligero-calle-hotel.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card Image"
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-black">
                <div className=' rounded-xl bg-slate-200 opacity-40 '>

                  <div className=' flex justify-between px-5 mt-5'>
                    <div className='flex space-x-2 '>
                      <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
                        <CiMusicNote1 className='text-black text-[20px] rounded-full  ' />
                      </button>
                      <div className=''>
                        <h1>
                          Lamps
                        </h1>
                        <h1>
                          10 DEVICES
                        </h1>
                      </div>
                    </div>

                    <div className=''>
                      <h1>
                        78
                      </h1>
                      <h1>
                        KW
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-80 md:w--96 lg:w-1/3 xl:w-[380px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-[500px] ">
              <img
                src="https://images.pexels.com/photos/28182514/pexels-photo-28182514/free-photo-of-madera-ligero-calle-hotel.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card Image"
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-black">
                <div className=' rounded-xl bg-slate-200 opacity-40 '>

                  <div className=' flex justify-between px-5 mt-5'>
                    <div className='flex space-x-2 '>
                      <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
                        <CiDroplet className='text-black text-[20px] rounded-full  ' />
                      </button>
                      <div className=''>
                        <h1>
                          Lamps
                        </h1>
                        <h1>
                          10 DEVICES
                        </h1>
                      </div>
                    </div>

                    <div className=''>
                      <h1>
                        78
                      </h1>
                      <h1>
                        KW
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Cuadro de Consumo de Clima y Electrodomésticos - Abarca 6 columnas */}
      <div className="col-span-12 sm:col-span-6 md:col-span-3 row-span-6 bg-gray-900
       text-white p-6 md:px-6 rounded-2xl border-[1px] border-gray-200 h-[530px] "  >
        <div className='px-5 mt-2'>
          <h1 className="text-lg font-semibold">Power Consumptiom</h1>
          <h2>sumary h</h2>
        </div>


        <div className='flex space-x-2 mt-5 '>
          <div className='flex w-full justify-center space-x-12'>
            <div className='bg-pink-300 flex flex-col p-3 rounded-xl space-y-3 w-[160px] '>
              <div>
                <button className='p-3 bg-pink-50 rounded-full border-[1px] border-white '>
                  <AiOutlineThunderbolt className='text-black text-[20px] rounded-full  ' />
                </button>
              </div>
              <div>
                <h1 className='text-black'>
                  48KWH
                </h1>
                <h2 className='text-black'>
                  TODAY
                </h2>
              </div>
            </div>

            <div className='bg-sky-200 flex flex-col p-3 rounded-xl space-y-3 w-[160px]'>
              <div>
                <button className='p-3 bg-sky-50 rounded-full border-[1px] border-white '>
                  <AiOutlineThunderbolt className='text-black text-[20px] rounded-full  ' />
                </button>
              </div>
              <div>
                <h1 className='text-black'>
                  48KWH
                </h1>
                <h2 className='text-black'>
                  TODAY
                </h2>
              </div>
            </div>

          </div>


        </div>
        <div className=' flex justify-between px-5 mt-5'>
          <div className='flex space-x-2 '>
            <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
              <FaRegLightbulb className='text-black text-[20px] rounded-full  ' />
            </button>
            <div className=''>
              <h1>
                Lamps
              </h1>
              <h1>
                10 DEVICES
              </h1>
            </div>
          </div>

          <div className=''>
            <h1>
              78
            </h1>
            <h1>
              KWH
            </h1>
          </div>
        </div>
        <div className=' flex justify-between px-5 mt-5'>
          <div className='flex space-x-2 '>
            <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
              <FaTv  className='text-black text-[20px] rounded-full  ' />
            </button>
            <div className=''>
              <h1>
                Smart TV
              </h1>
              <h1>
                1 DEVICE
              </h1>
            </div>
          </div>

          <div className=''>
            <h1>
              180
            </h1>
            <h1>
              KWH
            </h1>
          </div>
        </div>

        <div className=' flex justify-between px-5 mt-5'>
          <div className='flex space-x-2 '>
            <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
              <LuCoffee className='text-black text-[20px] rounded-full  ' />
            </button>
            <div className=''>
              <h1>
                Coffe Machine
              </h1>
              <h1>
                1 DEVICE
              </h1>
            </div>
          </div>

          <div className=''>
            <h1>
              110
            </h1>
            <h1>
              KWH
            </h1>
          </div>
        </div>

        <div className=' flex justify-between px-5 mt-5'>
          <div className='flex space-x-2 '>
            <button className='p-3 bg-gray-500 rounded-full border-[1px] border-white '>
              <LuPrinter className='text-black text-[20px] rounded-full  ' />
            </button>
            <div className=''>
              <h1>
                Printer
              </h1>
              <h1>
                1 DEVICE
              </h1>
            </div>
          </div>

          <div className=''>
            <h1>
              40
            </h1>
            <h1>
              KWH
            </h1>
          </div>
        </div>


      </div>
    </div>

  );
};

export default Dashboard;
