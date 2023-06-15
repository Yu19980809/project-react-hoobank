import styles from '../style';
import { discount, robot } from '../assets/images';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className={ `flex md:flex-row flex-col ${ styles.paddingY }` }>
    <div className={ `flex-1 ${ styles.flexStart } flex-col xl:px-0 sm:px-16 px-6` }>
      {/* discount tips */}
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={ discount } alt='discount' className='w-[32px] h-[32px]' />
        <p className={ `${ styles.paragraph } ml-2` }>
          <span className='text-white'>20%</span> DISCOUNT FOR { ' ' }
          <span className='text-white'>1 Month</span> ACCOUNT
        </p>
      </div>

      {/* main info */}
      <div className='w-full flex flex-row justify-between items-center'>
        <h1 className='flex-1 font-poppins font-normal ss:leading-[100px] leading-[75px] ss:text-[72px] text[56px] text-white'>
          The Next <br className='sm:block hidden' /> { ' ' }
          <span className="text-gradient">Generation</span> <br />{ ' ' }
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      {/* header text */}
      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[56px] text-white ss:leading-[100px] leading-[75px]">Payment Method.</h1>
    
      {/* text */}
      <p className={ `${ styles.paragraph } max-w-[470px] mt-5` }>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
    </div>

    {/* image */}
    <div className={ `${ styles.flexCenter } flex-1 md:my-0 my-10 relative` }>
      <img src={ robot } alt='billing' className='relative w-full h-full z-[5]' />

      <div className='absolute top-0 w-[40%] h-[35%] pink__gradient z-[0]' />
      <div className='absolute bottom-40 w-[80%] h-[80%] white__gradient z-[1]' />
      <div className='absolute bottom-20 right-20 w-[50%] h-[50%] blue__gradient z-[0]' />
    </div>

    <div className={ `${ styles.flexCenter } ss:hidden` }>
      <GetStarted />
    </div>

  </section>
)

export default Hero