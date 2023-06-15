import { quotes } from '../assets/images';

const FeedbackCard = ( { content, name, title, img } ) => (
  <div className='flex justify-between items-center flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <img src={ quotes } alt='double_quotes' className='w-[42px] h-[27px] object-contain' />
    <p className='my-10 font-poppins font-normal text-[18px] text-white leading-[32px]'>{ content }</p>

    <div className='flex flex-row items-center'>
      <img src={ img } alt='name' className='w-[48px] h-[48px] rounded-full' />

      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] text-white leading-[32px]'>{ name }</h4>
        <p className='font-poppins font-normal text-[16px] text-white leading-[24px]'>{ title }</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard