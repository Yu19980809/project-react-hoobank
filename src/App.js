import styles from './style';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components/index';

const App = () => (
  <div className='w-full bg-primary overflow-hidden'>

    {/* Navbar */}
    <div className={ `${ styles.paddingX } ${ styles.flexCenter }` }>
      <div className={ `${ styles.boxWidth }` }>
        <Navbar />
      </div>
    </div>

    {/* Hero */}
    <div className={ `bg-primary ${ styles.flexStart }` }>
      <div className={ `${ styles.boxWidth }` }>
        <Hero />
      </div>
    </div>

    {/* Others */}
    <div className={ `bg-primary ${ styles.paddingX } ${ styles.flexStart }` }>
      <div className={ `${ styles.boxWidth }` }>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
)

export default App;
