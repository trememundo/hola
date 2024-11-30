import { FaHome,  FaCog, FaExclamationCircle } from 'react-icons/fa'; // Importa los iconos de React Icons
import { FiSun, FiMusic, FiCoffee } from 'react-icons/fi'; // Para sol, música y café
import { MdLightbulb, MdOutlineShield } from 'react-icons/md'; // Para el foco y escudo


const Sidebar = () => {
  return (
    <div className="h-screen w-20  text-white p-6 fixed flex flex-col items-center">
     
      <div className='mb-8'>
        <p>SYNC</p>
      </div>

      {/* Sección de Inicio */}
      <div className="mb-8">
        <FaHome size={24} />
      </div>

      {/* Sección de Foco */}
      <div className="mb-8">
        <MdLightbulb size={24} />
      </div>

      {/* Sección de Música */}
      <div className="mb-8">
        <FiMusic size={24} />
      </div>

      {/* Sección de Café */}
      <div className="mb-8">
        <FiCoffee size={24} />
      </div>

      {/* Sección de Sol */}
      <div className="mb-8">
        <FiSun size={24} />
      </div>

   
      {/* Sección de Escudo */}
      <div className="mb-8">
        <MdOutlineShield size={24} />
      </div>

      <div className=' h-full flex flex-col justify-end'>
      

      {/* Sección de Configuración */}
      <div className="mb-8 ">
        <FaCog size={24} />
      </div>

      {/* Sección de Alerta */}
      <div className="mb-8">
        <FaExclamationCircle size={24} />
      </div>
      </div>

      {/* Foto de usuario en la parte inferior */}
      <div className="mt-auto mb-4">
        <img
          src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=400" // Aquí puedes poner la URL de la imagen del usuario
          alt="Foto de usuario"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
