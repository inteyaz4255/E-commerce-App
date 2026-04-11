import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse enim repellat, atque a ratione quas quo temporibus eligendi culpa, delectus consequatur nihil.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nesciunt nobis quo adipisci, eveniet earum quod rem debitis odio delectus facere perferendis. Qui.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic soluta eius temporibus placeat. Dolorem perspiciatis molestias debitis illum, deleniti nihil? Eaque, deserunt veniam?</p>
        </div>

      </div>

      <div className='text-xl py-4'>\
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Quality Assurance
          </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in cumque enim error quod quidem quis qui, numquam iusto beatae placeat sapiente aliquam.</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Convenience:
          </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium cupiditate cumque est temporibus et dolor laborum incidunt eligendi consequuntur modi? Officia, tempore voluptates!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
           Exceptional Customer Service:
          </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium cupiditate cumque est temporibus et dolor laborum incidunt eligendi consequuntur modi? Officia, tempore voluptates!</p>
        </div>
      </div>
      <Newsletterbox />
    </div>
  )
}

export default About
