import { Bulletin, Navbar, Hero, Opportunity, Gallery, CTA, FAQ, LeadGen, Footer } from './components'
import styles from './style'
import { BrowserRouter } from 'react-router-dom';


export const App = () => (
  <BrowserRouter>
  <div className='w-full overflow-hidden'>
    <div className={`${styles.flexCenter}`}>
      <Bulletin />
      </div> 
      <div>
      <Navbar />
    </div>
    <div className=''>
      <Hero />
    </div>
    <div className=''>
      <Opportunity />
      <Gallery />
    </div>
    <div className=''>
      <CTA />
    </div>
    <div className=''>
      <FAQ />
    </div>
    <div className=''>
      <LeadGen />
    </div>
    <div className=''>
      <Footer />
    </div>
  </div>
  </BrowserRouter>
)

export default App
