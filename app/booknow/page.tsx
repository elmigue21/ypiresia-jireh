import React from 'react'
import HeightWithNavbarDiv from '@/components/shared/Navbar/HeightWithNavbarDiv'
import BookingForm from '@/components/shared/forms/BookingForm'
import Footer from '@/components/shared/Navbar/Footer'
import BottomNav from '@/components/shared/Navbar/BottomNav'
import Link from 'next/link'

const BookNow = () => {
  return (
    <HeightWithNavbarDiv navbarPadding>
      <div className="flex items-center justify-center flex-col">
        <h1 className="w-full bg-amber-500 p-5 text-center">BOOK NOW</h1>
        <div className="w-full sm:w-3/4 flex items-center justify-center m-5">
          <BookingForm />
        </div>
      </div>
      <div className='w-full h-50 flex justify-center md:justify-end items-center p-10'>
        <Link href='/packages' className='bg-amber-500 p-5 rounded-xl hover:bg-amber-400 text-center'>Return to packages</Link>
      </div>
      <BottomNav/>
      <Footer />
    </HeightWithNavbarDiv>
  );
}

export default BookNow