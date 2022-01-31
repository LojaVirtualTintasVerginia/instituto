import Image from 'next/image'


export default function CardPro() {
  return (
  <>
    <div className="bg-slate-400 w-screen">
      <div className="text-center wx-auto mb-3 text-sm p-16  ">
        <Image src="/img/verginia-pro-logo.png" width={320} height={52}  alt=""/>
        <h2 className="text-xl ">
          <br />
            Confira tudo que a Verginia oferece para quem precisa de apoio profissional e de
          <br />
          <span >novidades do setor de pintura, decoração e construção.</span>
        </h2>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
        <div className="shadow p-7 rounded-xl border-t-4 border border-blue-900 bg-white ">
          <p className="uppercase text-sm font-medium text-gray-500 ">
            <div className=" flex items-center ">
                <a className="flex-shrink-0" href="">
                  <Image src="/img/construtor-pro.png" width={235} height={75} alt=""/>
                </a>
            </div>
          </p>
          <div className="mt-2">
            <ul className="grid grid-cols-1 text-sm gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Cursos e treinamento
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                  Eventos exclusivos
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Divulgação do seu trabalho
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Indicação para clientes
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Cashback
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-xl w-full text-xs font-bold transition ease-in duration-200 uppercase text-blue-900 hover:bg-blue-800 hover:text-slate-400 border border-blue-900 focus:outline-none">
              SAIBA MAIS
            </button>
          </div>
        </div>
        <div className="shadow p-7 rounded-xl border-t-4 border border-blue-900 bg-white ">
          <p className="uppercase text-sm font-medium text-gray-500 ">
            <div className=" flex items-center ">
                <a className="flex-shrink-0" href="">
                  <Image src="/img/construtor-pro.png" width={235} height={75} alt=""/>
                </a>
            </div>
          </p>
          <div className="mt-2">
            <ul className="grid grid-cols-1 text-sm gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Tendências de cores e decoração
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Eventos exclusivos
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Apoio para projetos especiais
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Divulgação do seu trabalho
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Cashback
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-xl w-full text-xs font-bold transition ease-in duration-200 uppercase text-blue-900 hover:bg-blue-800 hover:text-slate-400 border border-blue-900 focus:outline-none">
              SAIBA MAIS
            </button>
          </div>
        </div>
        <div className="shadow p-7 rounded-xl border-t-4 border border-blue-900 bg-white ">
          <p className="uppercase text-sm font-medium text-gray-500 ">
            <div className=" flex items-center ">
                <a className="flex-shrink-0" href="">
                  <Image src="/img/construtor-pro.png" width={235} height={75} alt=""/>
                </a>
            </div>
          </p>
          <div className="mt-2">
            <ul className="grid grid-cols-1 text-sm gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Atendimento personalizado
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Consultoria técnica e visita 
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Treinamento em obra
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Negociações exclusivas
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Venda direto da fabrica
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-xl w-full text-xs font-bold transition ease-in duration-200 uppercase text-blue-900 hover:bg-blue-800 hover:text-slate-400 border border-blue-900 focus:outline-none">
              SAIBA MAIS
            </button>
          </div>
        </div>
        <div className="shadow p-7 rounded-xl border-t-4 border border-blue-900 bg-white ">
          <p className="uppercase text-sm font-medium text-gray-500 ">
            <div className=" flex items-center ">
                <a className="flex-shrink-0" href="">
                  <Image src="/img/construtor-pro.png" width={235} height={75} alt=""/>
                </a>
            </div>
          </p>
          <div className="mt-2">
            <ul className="grid grid-cols-1 text-sm gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                Negociações exclusivas
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Feiras e eventos
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Consultoria especializada e visita 
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                 Parcerias
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>
                  Venda direto de fábrica
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded-xl w-full text-xs font-bold transition ease-in duration-200 uppercase text-blue-900 hover:bg-blue-800 hover:text-slate-400 border border-blue-900 focus:outline-none">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  </>
  )
}