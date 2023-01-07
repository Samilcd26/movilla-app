import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'


export default function Trend() {
  const [trend_movies, setTrend_movies] = useState([]);
  const [trend_tv, setTrend_tv] = useState([]);
  const [token, setToken] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  


  useEffect(() => {
    
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])
 
  useEffect(() => {
      Promise.all([
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=50d6b80c19da942011cb7fd5073d87be'),
        fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=50d6b80c19da942011cb7fd5073d87be')
      ]).then(async([resMovie, resTv]) => {
        const a = await resMovie.json();
        const b = await resTv.json();
        return [a, b]
      })
      .then(async(responseText) => {
        await setTrend_movies(responseText[0].results)
        await setTrend_tv(responseText[1].results)
      }).catch((err) => {
        console.log(err);
      });
  }
    , [])




  return (
    <div className=''>
      {/* Trentler diziler slayt */}
      <motion.div ref={carousel} className='overflow-hidden'  whileTap={{ cursor: "grabbing" }} >
        <p className='titles'>Trend Flimler</p>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='flex  w-full'>
         
          {trend_movies.splice(0,6).map((image,index) => {
            let img = "https://image.tmdb.org/t/p/w500" + image.poster_path
            
            
            return (
              <motion.div className='flex w-52 z-0 ' key={image.id}>
                
                <p className='font-trends absolute '>{index+1}</p>
                
                <img className='h-44 rounded-sm pointer-events-none ml-[70px] z-10' src={img} alt="" />

              </motion.div>)
              
          })}
        </motion.div>
      </motion.div>


      {/* Trentler filmler slayt */}
      <div className='overflow-hidden'>
      <motion.div ref={carousel} className='overflow-hidden' whileTap={{ cursor: "grabbing" }}>
        <p className='titles '>Trend Diziler</p>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='flex  w-full'>


          {trend_tv.splice(0,6).map((image,index) => {
            let img = "https://image.tmdb.org/t/p/w500" + image.poster_path
            return (
              <motion.div className='flex w-52 z-0 ' key={image.id}>
                <p className='font-trends absolute '>{index+1}</p>
                <img className='h-44 rounded-sm pointer-events-none ml-16 z-10' src={img} alt="" />
              </motion.div>)
          
          })}
        </motion.div>
      </motion.div>
      </div>
    </div>
  )
}
