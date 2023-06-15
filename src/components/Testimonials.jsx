import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section className={ `${ styles.paddingY } ${ styles.flexCenter } flex-col relative` }>
    {/* gradient background */}
    <div className='absolute -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient' />

    {/* top text part */}
    <div className='relative w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]'>
      <h1 className={ styles.heading2 }>What people are <br className='sm:block hidden' /> saying about us</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={ `${ styles.paragraph } max-w-[450px] text-left` }>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    {/* bottom card part */}
    <div className='relative flex flex-wrap sm:justify-start items-center z-[1] feedback-container'>
      { feedback.map( card => (
        <FeedbackCard key={ card.id } { ...card } />
      ) ) }
    </div>
  </section>
)

export default Testimonials