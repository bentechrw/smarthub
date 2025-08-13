import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRightIcon } from "flowbite-react";
import { Metadata } from "next";
import Link from "next/link";
import styles from '@/styles/home.module.css'
import Whatwedo from "@/components/Whatwedo";

export const metadata: Metadata = {
  title: 'Home - Smart Hub Service'
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className={`${styles.homeFlex}`}>
        <div className=" flex flex-col gap-7 ml-[5%] mb-3">

          <h2 className="text-[6vw] font-black">
            The best online service agency in Kigali, Rwanda
          </h2>

          <p className="text-[2vw] font-[100] text-[#8b9297]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, officia!</p>

          <Link href='services' role='button' target='_self' className='flex items-center gap-2 mt-[3rem] rounded-sm uppercase p-4 w-fit border border-[#2951d5] cursor-pointer text-blue-700 font-semibold transition-colors hover:bg-blue-700 hover:text-white'><span>&nbsp; Learn More</span><ArrowRightIcon /></Link>
          
        </div>
      </div>
      <div className="flex w-[90%] ml-[5%] mt-[7rem] mb-[7rem]">
        <div className="flex-1/2">
          <h5 className="text-[2vw] text-[#2951d5] font-bold">Hi there!</h5>
          <h2 className="text-[5vw] font-black">Here are the abstract</h2>
        </div>
        <div className="flex-1/2">
          <div className="flex flex-col gap-6">
            <p className="text-[1.1rem] font-[100] text-[#8b9297]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, asperiores distinctio. Adipisci deserunt hic obcaecati porro exercitationem voluptatem, repellendus minus inventore assumenda maiores?
            </p>

            <p className="text-[1.1rem] font-[100] text-[#8b9297]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et maiores perspiciatis voluptas architecto incidunt sit fuga vero velit provident!</p>
            <Link href='services' role='button' target='_self' className='flex items-center gap-2 rounded-sm uppercase p-4 w-fit border border-[#2951d5] cursor-pointer text-blue-700 font-semibold transition-colors hover:bg-blue-700 hover:text-white'><span>&nbsp; Read More</span><ArrowRightIcon /></Link>
          </div>
        </div>
      </div>
      <Whatwedo />
      <Footer />
      
    </div>
    
  );
}
