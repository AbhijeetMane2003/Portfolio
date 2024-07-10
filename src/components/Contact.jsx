import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8tky5no', 'template_ekderkn', form.current, {
                publicKey: 'NbYM6CCkbZl7w-poK',
            })
            .then(
                () => {
                    toast.success('Email sent successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                        });
                    form.current.reset();
                },
                (error) => {
                    toast.error('Error sending email. Please try again later.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    });
                }
            );
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />

            <hr className='z-[1] w-[40%] m-auto opacity-[0.10] mb-14'/>
            <div className='flex justify-between flex-col h-full items-center w-[80%] m-auto mt-[8vh]'>
                <h2 className='flex items-center justify-center font-bold'><span className='text-8xl opacity-[0.1] tracking-widest max-sm:text-7xl max-vsm:text-6xl'>CONTACT</span> <span className='absolute bg-transparent text-5xl max-sm:text-4xl max-vsm:text-3xl'>GET IN TOUCH</span></h2>

                <div className='my-20 flex max-lg:flex-col max-lg:mt-20'>
                    <div className='w-[45%] max-lg:w-auto max-lg:flex max-lg:flex-col max-lg:items-center'>
                        <div>
                            <h2 className='font-bold text-3xl mb-3 max-lg:text-center max-lg:text-3xl max-vsm:text-2xl'>DON'T BE SHY !</h2>
                            <p className='font-semibold max-lg:text-center max-lg:text-xl max-vsm:text-lg'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        </div>
                        <div className='mt-5 max-lg:text-center max-lg:mt-10'>
                            <span className='max-lg:text-3xl font-bold max-vsm:text-2xl'><CiMail className='inline-block mr-1'/> MAIL</span>
                            <p className='max-lg:text-2xl max-lg:mt-2 max-vsm:text-lg'>innovate.cg@yahoo.com</p>
                        </div>
                        <div className='my-5 max-lg:text-center max-lg:mt-10'>
                            <span className='max-lg:text-3xl font-bold max-vsm:text-2xl'><IoIosCall className='inline-block mr-1'/> CALL</span>
                            <p className='max-lg:text-2xl max-lg:mt-2 max-vsm:text-lg'>+91 9766094178</p>
                        </div>
                        <div className='inline-block max-lg:m-10'>

                            <a href="https://www.instagram.com/innovate_cg/" target='_blank'>
                                <div className='rounded-full w-10 h-10 bg-white overflow-hidden m-auto text-center inline-block mx-3 max-lg:mx-5 max-lg:w-12 max-lg:h-12'>
                                    <IoLogoInstagram  className='flex my-2 max-vsm:my-3 mx-auto fill-black text-2xl bg-transparent'/>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/abhijeet-mane-041900227/" target='_blank'>
                                <div className='rounded-full w-10 h-10 bg-white overflow-hidden m-auto text-center inline-block max-lg:w-12 max-lg:h-12'>
                                    <FaLinkedin  className='flex my-2 max-vsm:my-3 mx-auto fill-black text-2xl bg-transparent'/>
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className='w-full ml-5 max-lg:mt-10 max-sm:w-auto'>
                        <form onSubmit={sendEmail} ref={form}>
                            <div className='flex max-sm:flex-col'>
                                <input type="text" name='from_name' autoComplete="off" placeholder='YOUR NAME' required className='w-56 px-5 py-3 outline-none bg-white bg-opacity-[0.1] font-bold  rounded-3xl mx-2 border-none max-lg:text-xl max-lg:w-60 max-sm:w-full max-vsm:text-base'/>
                                <input type="email" name="from_email" autoComplete="off" placeholder='YOUR EMAIL' required  className='w-56 px-5 py-3 outline-none bg-white bg-opacity-[0.1] font-bold  rounded-3xl mx-2 border-none max-lg:text-xl max-lg:w-60 max-sm:mt-5 max-sm:w-full max-vsm:text-base'/>
                            </div>
                            <textarea name="message" cols="30" rows="8" placeholder='YOUR MESSAGE' required className='w-full mt-4 ml-2 rounded-3xl font-bold p-5 border-none outline-none bg-white bg-opacity-[0.1] max-lg:text-xl max-sm:w-full max-vsm:text-base resize-none'/>
                            <input type="submit" value="SEND MESSAGE" className='bg-white font-bold text-black w-40 py-2 mt-4 ml-2 rounded-3xl max-lg:text-xl max-lg:w-52 max-lg:py-3 max-vsm:text-base'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
