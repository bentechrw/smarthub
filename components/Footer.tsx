import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaThreads, FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='mt-3 mb-0'>

        <div className="flex justify-between pt-[96px] pb-[64px] pl-[40px] pr-[40px] bg-[#26262c]">

            <div className="flex">
                <div className="flex flex-col justify-between gap-4">
                    <div className="">
                        <Link href="/">
                            <img src="/shs.svg" className="self-center scale-x-100" alt="Smart Hub Service" />
                        </Link>
                    </div>
                    <ul className='flex justify-center gap-2'>
                        <li>
                            <Link href='https://x.com/@username'>
                                <FaFacebook size={20} className='text-white'/>
                            </Link>
                        </li>
                        <li>
                            <Link href='https://x.com/@username'>
                                <FaX size={20} className='text-white'/>
                            </Link>
                        </li>
                        <li>
                            <Link href='https://x.com/@username'>
                                <FaInstagram size={20} className='text-white'/>
                            </Link>
                        </li>
                        <li>
                            <Link href='https://x.com/@username'>
                                <FaThreads size={20} className='text-white'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-bold text-white mb-3'>Services</h2>
                <ul className='flex flex-col gap-2'>
                    <li className='text-white text-sm'><Link href='#'>Creative</Link></li>
                    <li className='text-white text-sm'><Link href='#'>Digital</Link></li>
                    <li className='text-white text-sm'><Link href='#'>Social media</Link></li>
                    <li className='text-white text-sm'><Link href='#'>Traditional</Link></li>
                    <li className='text-white text-sm'><Link href='#'>Custom</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-bold text-white mb-3'>Agency</h2>
                <ul className='flex flex-col gap-2'>
                    <li className='text-white text-sm'><Link href='#'>About us</Link></li>
                    <li className='text-white text-sm'><Link href='#'>Our team</Link></li>
                    <li className='text-white text-sm'><Link href='#'>Contact us</Link></li>
                    <li className='text-white text-sm'><Link href='#'>News & blog</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-bold text-white mb-3'>Keep in touch</h2>
                <ul className='flex flex-col gap-2'>
                    <li className='text-white text-sm'><Link href='#'>KN ST 405, Nyarugenge, RW</Link></li>
                    <li className='text-white text-sm'><Link href='tel:250782643272'>+250-782-643-272</Link></li>
                    <li className='text-white text-sm'><Link href='mailto:bentech250@gmail.com'>bentech250@gmail.com</Link></li>
                </ul>
            </div>
        </div>

        <hr className='text-white'/>

        <div className="flex justify-between pt-[50px] pb-[30px] pl-[20px] pr-[20px] bg-[#26262c]">
            <div className="text-white">© 2025 Smart Hub Service</div>
            <div className="text-white">Powered by <Link href='https://bentechrw.com' target='_self'>Bentechrw</Link></div>
        </div>
    </footer>
  )
}

export default Footer