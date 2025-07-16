import React from 'react'
import ImageSlider from '../ImageSlider'
import Query from '../Pages/Query';
import Banner from '../Banner';
import NewsSlider from '../Pages/NewsSlider';
import Footer from '../Footer';



export const Visitor = () => {
  return (
    <div>
        <ImageSlider/>
        <Query/>
        <Banner/>
        <NewsSlider/>
        <Footer/>
    </div>
  )
}
