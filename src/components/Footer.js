import Image from 'next/image'

export default function Footer() {
  return (
    <>
<footer className="text-center lg:text-left bg-gray-100 rounded-2xl  text-blue-900 border border-blue-900">
  <div className="mx-5 mt-5 py-1 text-center md:text-left border-b text-sm border-blue-900">
    <div className="grid grid-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <div className="">
        <a className="flex-shrink-0" href="">
          <Image src="/img/logo.svg" width={210} height={93} />
        </a>
    <div className="flex justify-center items-center lg:justify-between p-4 ">
    <div className="flex justify-center p-1">
      <a href="#!" className="mr-6  text-blue-900">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
          className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
          </path>
        </svg>
      </a>
      <a href="#!" className="mr-6 text-blue-900">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
          className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
          <path fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
          </path>
        </svg>
      </a>
      <a href="#!" className="mr-6 text-blue-900">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
          className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
          </path>
        </svg>
      </a>
      <a href="#!" className="mr-6 text-blue-900">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
          className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
          </path>
        </svg>
      </a>
    </div>
  </div>
  <div className="flex-shrink-0">
  <a className="flex-shrink-0 mt-8" href="">
            <Image src="/img/selo.png" width={300} height={130} />
          </a>
  </div>
      </div>
      <div className="">
      <div className="text-base text-blue-900 font-semibold mb-4 flex justify-center md:justify-start "> 
        <h6 className=" border-b border-gray-300">
          Atendimento    
        </h6>
        </div>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Online </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Lojas </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Televendas </a>
        </p>
        <p>
          <a href="#!" className="text-blue-900">Venda Direta</a>
        </p>
        
      </div>
      <div className="">
        <div className="text-base text-blue-900  font-semibold mb-4 flex justify-center md:justify-start"> 
        <h6 className=" border-b border-gray-300">
          A Verginia
          
        </h6>
        </div>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">A Verginia </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Instituto Verginia </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Trabalhe Conosco </a>
        </p>
        <p>
          <a href="#!" className="text-blue-900">Contato</a>
        </p>
      </div>
      <div className="">
      <div className="text-base text-blue-900 font-semibold mb-4 flex justify-center md:justify-start "> 
        <h6 className=" border-b border-gray-300">
          Verginia para Profissionais    
        </h6>
        </div>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Pintores  </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Arquitetos  </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Construtoras  </a>
        </p>
        <p>
          <a href="#!" className="text-blue-900">Condomínios</a>
        </p>
        
      </div>
      <div className="">
      <div className="text-base text-blue-900  font-semibold mb-4 flex justify-center md:justify-start"> 
        <h6 className=" border-b border-gray-300">
          Ajuda
          
        </h6>
        </div>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Forma de Pagamento </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Trocas e Devoluções </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Perguntas Frequentes </a>
        </p>
        <p className="mb-4">
        <a href="#!" className="text-blue-900">2º de Boleto </a>
        </p>
        <p className="mb-4">
        <a href="#!" className="text-blue-900"> Inspiração</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-blue-900">Guia de Cores </a>
        </p>
        <p>
          <a href="#!" className="text-blue-900"> Encontre seu Pintor</a>
        </p>
        <br />
      </div>

    </div>
  </div>
  <div className="text-center p-6 bg-gray-200">
    <a className="text-blue-900 font-semibold" href="https://tailwind-elements.com/">
    <Image src="/img/pagtos.png" width={1170} height={100} />
    </a>
  </div>
</footer>
<br />
  <h1 className="w-auto text-blue-900 text-center text-xs">Tintas Verginia © 2021, Campo Magro - PR / Brasil, CNPJ: 84.866.342/0008-55</h1>
<br />
</>

  )
}