import Header from './Header'
import Footer from './Footer'
import CardPro from './cards/CardPro'
import Rolo from './cards/rolo'

export default function Layout({ children }) {
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
      <Header />
      {children}
    </div>
    <CardPro />
    
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
    <Rolo />
    <Footer />
    </div>
    

    </>
  );
}