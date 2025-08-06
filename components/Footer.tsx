import { XIcon } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaThreads, FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='mt-3 mb-0'>
        <div className="flex flex-col pt-[96px] pb-[64px] pl-[40px] pr-[40px] bg-[#26262c]">
            <div className="flex">
                <div className="">
                    <div className="">
                        <Link href='#'><img src="/shs.svg" className="mr-3 h-6 sm:h-9" alt="Smart Hub Service" /></Link>
                    </div>
                    <div className="">
                        <ul>
                            <li>
                                <Link href='https://x.com/@username'>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://x.com/@username'>
                                    <FaX />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://x.com/@username'>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://x.com/@username'>
                                    <FaThreads />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    </footer>
  )
}

export default Footer