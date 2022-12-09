import React, {useState, useEffect, useRef } from 'react'

import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const [emailMessage, setEmailMessage] = useState('');
  const [emailTextColor, setEmailTextColor] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailMessage('');
    },3000)

    return () => clearTimeout(timer);
  }, [emailMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_elsey6m',
      'template_eoewuah',
        form.current,
      'u98H50bVQXiTWT2G4'
    )
    .then(
      (res) => {
        setEmailMessage('Your Email was sent :)');
        setEmailTextColor('green')
      },
      (err) => {
        setEmailMessage('Your Email wan not sent :(')
        setEmailTextColor('red')
      }
    )
    e.target.reset();
  }
  return (
    <section className='section-sm lg:section-lg'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]'
         data-aos='zoom' data-aos-offset='400'>
          <div className='flex flex-1 flex-col justify-center pl-8' data-aos='fade-down' data-aos-delay='300' data-aos-offest='500'>
            <h2 className='h2 mb-3 lg:mb-7'>Get in Touch With Us for Yoga Course.</h2>
            <p className='mb-7 lg:mb-0'>Get in touch with us for any kind of help. We are here to give you
              the best and also here to help you to find your yoga course.</p>
          </div>
          <form onSubmit={(e) => sendEmail(e)} ref={form} className='flex-1 bg-[#fff] shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-[20]' data-aos='fade-up'
            data-aos-delay='300'
            data-aos-offset='500'>
            <input type="text" className='form-control' placeholder='First Name' required name='user_firstname'/>
            <input type="text" className='form-control' placeholder='Last Name' required name='user_lastname'/>
            <input type="email" className='form-control'placeholder='Email address' required name='user_email'/>
            <textarea name="user_message" placeholder='Message' className='form-control py-5 h-[165px] resize-none'></textarea>
            <button className='btn btn-lg btn-orange self-start' type='submit'>Send Message</button>
            <p style={{ color: emailTextColor}}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact