'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { TbMessageHeart } from '@/data/icons';
import SectionTitle from './ui/SectionTitle'

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

      const result = await emailjs.send(serviceId, templateId, data, userId);

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
  };

  return (
    <section id='contact' className='py-16'>
      <div className='max-w-3xl mx-auto text-center'>
        <SectionTitle title='Call of the Whisper' icon={<TbMessageHeart />} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6 bg-custom-gradient p-8 rounded-3xl shadow-glow3 mt-8'
        >
          {/* Name Input */}
          <div className='flex flex-col'>
            {errors.name ? (
              <span className='text-red-500 text-start font-semibold ml-1'>
                {errors.name.message}
              </span>
            ) : (
              <label
                htmlFor='name'
                className='text-left font-medium text-white-pearl ml-1'
              >
                Name
              </label>
            )}

            <input
              id='name'
              type='text'
              {...register('name', { required: 'Name is required' })}
              className={`p-3 border ${
                errors.name ? 'border-red-500' : 'border-indigo-600'
              } rounded-md focus:outline-none focus:bg-blue-800 focus:border-blue-600 bg-blue-900 border-indigo-600 mt-1 focus:shadow-glow2`}
              placeholder='Your Name'
            />
          </div>

          {/* Email Input */}
          <div className='flex flex-col'>
            {errors.email ? (
              <span className='text-red-500 text-start font-semibold ml-1'>
                {errors.email.message}
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
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className={`p-3 border ${
                errors.name ? 'border-red-500' : 'border-indigo-600'
              } rounded-md focus:outline-none focus:bg-blue-800 focus:border-blue-600 bg-blue-900 border-indigo-600 mt-1 focus:shadow-glow2`}
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
                errors.name ? 'border-red-500' : 'border-indigo-600'
              } rounded-md focus:outline-none focus:bg-blue-800 focus:border-blue-600 bg-blue-900 border-indigo-600 mt-1 focus:shadow-glow2`}
              placeholder='Write from the Heart'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 font-josefinSans'
          >
            Let&apos;s Build Bridges
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
