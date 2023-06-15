import { apple, bill, google } from '../assets/images';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* left image part */}
    <div className={ layout.sectionImgReverse }>
      <img src={ bill } alt='billing' className='relative w-full h-ull z-[5]' />

      <div className='absolute top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient z-[3]' />
      <div className='absolute top-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient z-[0]' />
    </div>

    {/* right text part */}
    <div className={ layout.sectionInfo }>
      <h2 className={ styles.heading2 }>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
      <p className={ `${ styles.paragraph } max-w-[470px] mt-5` }>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={ apple } alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={ google } alt='goole_play' className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)

export default Billing