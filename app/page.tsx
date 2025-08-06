import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRightIcon } from "flowbite-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="homeFlex">
        <div className=" flex flex-col gap-3 ml-[5%]">

          <h2 className="text-[6vw] font-black">
            The best online service agency in Kigali, Rwanda
          </h2>

          <p className="text-[2vw] font-[100]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, officia!</p>

          <Link href='services' role='button' target='_self' className='flex items-center gap-2 rounded-sm uppercase p-4 w-fit border border-white cursor-pointer text-blue-700 font-semibold transition-colors hover:bg-blue-700 hover:text-white'><span>&nbsp; Learn More</span><ArrowRightIcon /></Link>
          
        </div>
      </div>
      <Footer />
      
    </div>
    
  );
}
