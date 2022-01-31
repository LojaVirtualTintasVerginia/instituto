import Image from 'next/image'
import Info from './cards/Info'
import Banner from './carousel/banner'




export default function Header() {
  return (
    
<>
<nav className="flex bg-white flex-wrap  justify-between p-4">

    <div className="block lg:hidden">
        <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>
                    Menu
                </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                </path>
            </svg>
        </button>
    </div>
    <div className=" flex items-center">
                    <a className="flex-shrink-0" href="">
                    <Image src="/img/logo.svg" width={150} height={83} />
                    </a>
                    </div>
    <div className="navbar-menu hidden md:block">
    <div className="flex space-x-4 justify-end border-b border-gray-300 mb-4 p-2 ">

<button type="button" className="rounded-tl-2xl  inline-block px-8 py-2  bg-blue-100 text-slate-400 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out">NOSSAS LOJAS</button>
<button type="button" className=" rounded-br-2xl inline-block px-8 py-2 bg-Lime-400  text-slate-400 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-Lime-700 hover:shadow-lg focus:bg-Lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out">COMPRE ONLINE</button>
  
  </div>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
        A VERGINA
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
          INSTITUTO VERGINIA
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
        VERGINIA PARA PROFISSIONAIS
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
        TRABALHE CONOSCO
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-blue-900 hover:text-indigo-600" href="#">
          FALE CONOSCO
        </a>
        <a className="block lg:inline-block mt-4 lg:mt-0 font-bold text-blue-900 hover:text-indigo-600" href="#">
            
        </a>
    </div>
</nav>
<Banner />
<Info />


</>

  )
}