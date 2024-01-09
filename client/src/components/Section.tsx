import { getUserData } from '@/lib/getUserInfo'
import { CalendarDays, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { UserType } from '../../types'

const Section = async() => {

  const userInfo:Promise<UserType> =  getUserData('arashgoodarzi');
  const user = await userInfo

  return (
    <section className='sm:w-3/4 font-mono pl-3 z-10'>
        {/* SUMMERY */}
        <div className="text-neutralStrong py-3">
            <div className="title-head-main">SUMMERY</div>
            <div className="text-sm px-2">
              <p className='md:text-xl text-base text-justify bg-primaryPale py-2 px-2 rounded-md'>
                {user.sectionInfo.summery}
              </p>
            </div>
        </div>     

        {/* EXPERIENCE */}
        <div className="space-y-6 text-neutralStrong py-3">
            <div className="title-head-main">EXPERIENCE</div>
            {
              user.sectionInfo.experience.map((item,index)=>(
                <div key={item.id} className="px-2">
                  <h2 className='title-subject-main'>{item.title}</h2>
                  <div className="flex flex-row justify-between">
                    <h3 className=' text-primaryTooStrong md:text-xl text-base font-bold'>{item.company}</h3>
                    <div className="flex flex-row items-center">
                      <div className="flex flex-row items-center text-xs"><CalendarDays size={12} color='gray' className='mr-1' />{item.date}</div>
                      <div className="flex items-center text-xs ml-6"><Link href="https://www.google.com/maps/place/Toronto,+ON,+Canada/data=!4m2!3m1!1s0x89d4cb90d7c63ba5:0x323555502ab4c477?sa=X&ved=2ahUKEwihs5DvmdOCAxUyaqQEHY_gB5MQ8gF6BAgKEAA" className='flex items-center'><MapPin size={12} color='gray' className='mr-1' />{item.location}</Link></div>
                    </div>
                  </div>
                  <div className="">
                    <h5 className='md:text-lg text-sm'>{item.description}</h5>
                    <ul className='md:text-base text-xs list-disc px-8 bg-primaryPale py-2 rounded-md'>
                      {
                        item.details.map((detail,i)=>(
                          <li key={detail} className=''>{detail}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              ))
            }

        </div>     
        {/* EDUCATION */}
        <div className="text-neutralStrong py-3">
            <div className=" title-head-main">EDUCATION</div>
            {
              user.sectionInfo.education.map((item,index)=>(
                <div key={item.id} className="px-2">
                  <h2 className='title-subject-main'>{item.title}</h2>
                  <div className="flex flex-row justify-between items-center">
                    <h3 className=' text-primaryTooStrong py-2'>{item.collageName}</h3>
                    <div className="text-sm py-2">GPA: <span className='text-primaryTooStrong font-bold'>{item.gpa}%</span> </div>
                    <div className="flex flex-row items-center py-2">
                      <div className="flex flex-row items-center text-xs"><CalendarDays size={12} color='gray' className='mr-1' />{item.date}</div>
                      <div className="flex items-center text-xs  ml-6"><Link href="https://www.google.com/maps/place/Toronto,+ON,+Canada/data=!4m2!3m1!1s0x89d4cb90d7c63ba5:0x323555502ab4c477?sa=X&ved=2ahUKEwihs5DvmdOCAxUyaqQEHY_gB5MQ8gF6BAgKEAA" className='flex items-center'><MapPin size={12} color='gray' className='mr-1' />{item.location}</Link></div>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>

        {/* CERTIFICATIONS */}
        <div className="text-neutralStrong py-3 ">
            <div className=" title-head-main">CERTIFICATIONS</div>
            <div className="px-2 ">
              <table className="table-auto w-full md:text-xl text-sm text-left even:bg-white even:text-black odd:bg-neutralStrong odd:text-white rounded-md">
                <thead>
                  <tr className=''>
                    <th className='pl-2'>Course</th>
                    <th className='sm:flex hidden'>Instractor </th>
                    <th>From</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {
                    user.sectionInfo.certifications.map((item,index)=>(
                      <tr key={item.id} className='even:bg-white even:text-black odd:bg-primaryTooStrong odd:text-neutralTooPale'>
                        <td className='pl-2'>{item.course}</td>
                        <td className='sm:flex hidden'>{item.instractor}</td>
                        <td>{item.from}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
        </div>
    </section>
  )
}

export default Section