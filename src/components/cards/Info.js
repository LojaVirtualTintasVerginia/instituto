import Image from 'next/image'
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from "react-icons/fa";


export default function Info() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full mb-8">
      <div className="shadow hover:shadow-md  w-full bg-white rounded-xl overflow-hidden cursor-pointer ">
        <div div className="rounded-lg bg-white max-w-sm bg-slate-400">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/img/loja-card.png" width={500} height={260} alt=""/>
          </a>
          <div className="p-6 relative -top-5 rounded-xl  bg-slate-400">
            <h5 className="text-gray-900 text-2xl font-bold mb-2">Lojas Verginia</h5>
            <p className="text-gray-700 text-sm mb-4">
              Existe sempre uma Verginia na sua região. Descubra qual é e encontre tudo o que você precisa para colocar um novo tom na sua vida.
            </p>
            <button 
              className="flex mt-6 px-3 p-2 text-xs font-bold transition ease-in duration-200 uppercase rounded-lg text-blue-900 hover:bg-blue-800 hover:text-slate-400 border border-blue-900 focus:outline-none">
                <span className="pr-2"><FaMapMarkerAlt size="15"/>
                </span>
              NOSSAS LOJAS
            </button>
          </div>
        </div>
     </div>

     <div className="shadow hover:shadow-md  w-full bg-white rounded-xl overflow-hidden cursor-pointer ">
        <div div className="rounded-lg bg-white max-w-sm bg-slate-400">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/img/online-card.png" width={500} height={260} alt=""/>
          </a>
          <div className="p-6 relative -top-5 rounded-xl  bg-slate-400">
            <h5 className="text-gray-900 text-2xl font-bold mb-2">Compre Online</h5>
            <p className="text-gray-700 text-sm mb-4">
              Retire na loja ou receba na sua casa. Pague em até 10x nos cartões. Entrega em até 24h para Curitiba em Região Metropolitana.
            </p>
            <button 
              className="flex mt-6 px-3 p-2 text-xs font-bold transition ease-in duration-200 uppercase rounded-lg text-blue-900 hover:bg-blue-800 hover:text-slate-400 border border-blue-900 focus:outline-none">
                <span className="pr-2"><FaShoppingCart size="15"/>
                </span>
              COMPRE ONLINE
            </button>
          </div>
        </div>
     </div>

     <div className="shadow hover:shadow-md  w-full bg-white rounded-xl overflow-hidden cursor-pointer ">
        <div div className="rounded-lg bg-white max-w-sm bg-slate-400">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/img/pintor-card.png" width={500} height={260} alt=""/>
          </a>
          <div className="p-6 relative -top-5 rounded-xl  bg-slate-400">
            <h5 className="text-gray-900 text-2xl font-bold mb-2">Encontre seu pintor</h5>
            <p className="text-gray-700 text-sm mb-4">
              A mão de obra que você precisa indicada por quem você confia. Descubra os profissionais da pintura que vão transformar sua obra ou reforma.
            </p>
            <button 
              className="flex mt-6 px-3 p-2 text-xs font-bold transition ease-in duration-200 uppercase rounded-lg text-blue-900 hover:bg-blue-800 hover:text-slate-400 border border-blue-900 focus:outline-none">
                <span className="pr-2"><FaSearch size="15"/>
                </span>
                SELECIONE SUA CIDADE
            </button>
          </div>
        </div>
     </div>
    </div>
  )

}