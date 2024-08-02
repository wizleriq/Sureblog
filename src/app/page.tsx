// import Image from "next/image";
'use client'
import Header from "@/components/Header";
import BlogItem from "@/components/BlogItem";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <Header />
     {/* <BlogItem /> */}
     <BlogList />
     <Footer />
    </>
  );
}
 