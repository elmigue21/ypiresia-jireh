import React from 'react'
import { AutoCarousel } from './components/Home/AutoCarousel';
import HeightWithNavbarDiv from './components/shared/Navbar/HeightWithNavbarDiv';

export default function Home() {

  return (
    <HeightWithNavbarDiv>
      <AutoCarousel/>
    </HeightWithNavbarDiv>
  );
}
