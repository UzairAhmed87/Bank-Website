import React from 'react'
import styles from './style'
import {Billing,Business, Button, CardDeal, Client, CTA, FeedBack,  Footer,  GetStarted,  Hero, NavBar, Stats,Testimonial} from './components/index'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
<div className={`${styles.paddingX} ${styles.flexCenter}`}>
<div className={`${styles.boxWidth} text-white`}>
<NavBar/>
</div>
</div>

<div className={`bg-primary ${styles.flexStart}`}>
  <div className={`${styles.boxWidth} text-white`}>
    <Hero/>
  </div>
</div>
<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
  <div className={`${styles.boxWidth} text-white`}>
    <Stats/>
    <Business/>
    <Billing/>
    <CardDeal/>
    <Testimonial/>
    <Client/>
    <CTA/>
    <Footer/>
  </div>
</div>
    </div>
  )


export default App
