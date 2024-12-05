'use client';

import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// import { TbMessageHeart } from '@/data/icons';
import SectionTitle from './ui/SectionTitle';
import Script from 'next/script';
import Image from 'next/image';


const img = 'https://i.ibb.co.com/SPVkr4S/send-mail.gif';

type FormInputs = {
  from_name: string;
  reply_to: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = async () => {
    if (formRef.current) {
      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          {
            publicKey: publicKey,
          }
        );

        if (result.status === 200) {
          toast.success('Message sent successfully!');
          reset();
        } else {
          toast.error('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <>
      {' '}
      <Script
        src='https://cdn.lordicon.com/lordicon.js'
        strategy='afterInteractive'
      />
      <section id='contact' className='py-16'>
        <div className='max-w-3xl mx-auto text-center'>
          <SectionTitle
            title='Call of the Whisper'
            imgLink='https://i.ibb.co.com/XS8x8GG/message.gif'
          />
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6 bg-custom-gradient-2 p-8 rounded-3xl shadow-glow2 mt-8'
          >
            {/* Name Input */}
            <div className='flex flex-col'>
              {errors.from_name ? (
                <span className='text-red-500 text-start font-semibold ml-1'>
                  {errors.from_name.message}
                </span>
              ) : (
                <label
                  htmlFor='from_name'
                  className='text-left font-medium text-white-pearl ml-1'
                >
                  Name
                </label>
              )}
              <input
                id='name'
                type='text'
                {...register('from_name', { required: 'Name is required' })}
                className={`p-3 border ${
                  errors.from_name ? 'border-red-500' : 'border-indigo-600'
                } rounded-md focus:outline-none focus:bg-blue-900 focus:border-blue-600 bg-indigo-900 border-indigo-600 mt-1 focus:shadow-glow2`}
                placeholder='Your Name'
              />
            </div>

            {/* Email Input */}
            <div className='flex flex-col'>
              {errors.reply_to ? (
                <span className='text-red-500 text-start font-semibold ml-1'>
                  {errors.reply_to.message}
                </span>
              ) : (
                <label
                  htmlFor='email'
                  className='text-left font-medium text-white-pearl ml-1'
                >
                  Email
                </label>
              )}
              <input
                id='email'
                type='email'
                {...register('reply_to', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                className={`p-3 border ${
                  errors.reply_to ? 'border-red-500' : 'border-indigo-600'
                } rounded-md focus:outline-none focus:bg-blue-900 focus:border-blue-600 bg-indigo-900 border-indigo-600 mt-1 focus:shadow-glow2`}
                placeholder='Your Email'
              />
            </div>

            {/* Message Input */}
            <div className='flex flex-col'>
              {errors.message ? (
                <span className='text-red-500 text-start font-semibold ml-1'>
                  {errors.message.message}
                </span>
              ) : (
                <label
                  htmlFor='message'
                  className='text-left font-medium text-white-pearl ml-1'
                >
                  Message
                </label>
              )}
              <textarea
                id='message'
                {...register('message', { required: 'Message is required' })}
                rows={4}
                className={`p-3 border ${
                  errors.message ? 'border-red-500' : 'border-indigo-600'
                } rounded-md focus:outline-none focus:bg-blue-900 focus:border-blue-600 bg-indigo-900 border-indigo-600 mt-1 focus:shadow-glow2`}
                placeholder='Write from the Heart'
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full py-3 px-6 bg-indigo-800 text-white-pearl font-semibold rounded-md hover:bg-blue-800 transition duration-300 font-josefinSans flex items-center justify-center gap-8'
            >
              <Image src={img} alt='message' height={25} width={25} />
              Let&apos;s Build Bridges
              <Image src={img} alt='message' height={25} width={25} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;