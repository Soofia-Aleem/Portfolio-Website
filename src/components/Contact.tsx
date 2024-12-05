import React from 'react'
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8' data-aos="zoom-in">
                <h2 className='text-5xl' >Reach Out to Us</h2>
                <p className='text-gray-300 text-[18px] pt-1'>
                "Let us know how we can assist you, reach out to us now."
                </p>
                <div className='flex gap-3 items-center'>
                <AiTwotoneMail size={30}/> hsa@gmail.com
                </div>
                <div className='flex gap-3 items-center'><FaPhoneSquareAlt size={30}/>021-7461939</div>
            </div>
            <div className='space-y-8' data-aos="zoom-out-up">
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-[50px bg-transparent border border-accent' id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-out-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='h-[50px bg-transparent border border-accent' id='text' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-out-up">
                    <label htmlFor="message">Message</label>
                    <textarea className='h-[50px bg-transparent border border-accent' id='message' rows={8}>
                        </textarea>
                </div>
                <button className='bg-accent p-2 px-6'>Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
