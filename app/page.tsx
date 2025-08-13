import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRightIcon } from "flowbite-react";
import { Metadata } from "next";
import Link from "next/link";
import styles from '@/styles/home.module.css'
import Whatwedo from "@/components/Whatwedo";
import HeroAboutSection from "@/components/Home";

export const metadata: Metadata = {
  title: 'Home - Smart Hub Service'
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroAboutSection />
      <Whatwedo />
      <Footer />
      
    </div>
    
  );
}
