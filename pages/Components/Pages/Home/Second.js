import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from '../../Helper/Carousel';


export default function Second() {
  const [discover_movies, setDiscover_movies] = useState([]);
  const [discover_tv, setDiscover_tv] = useState([]);


  const [width, setWidth] = useState(0);
  const carousel = useRef();



  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  useEffect(() => {
    Promise.all([
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=50d6b80c19da942011cb7fd5073d87be&language=en-US&page=1'),
      fetch('https://api.themoviedb.org/3/tv/popular?api_key=50d6b80c19da942011cb7fd5073d87be&language=en-US&page=1')
    ]).then(async ([resMovie, resTv]) => {
      const a = await resMovie.json();
      const b = await resTv.json();
      return [a, b]
    })
      .then(async (responseText) => {
        await setDiscover_movies(responseText[0].results)
        await setDiscover_tv(responseText[1].results)
      }).catch((err) => {
        console.log(err);
      });
  }
    , [])

  
  if (discover_movies!==[] && discover_tv!==[]) {
    return (
    <div className='text-white pt-52'>
      <div>
        {/* Title */}
        <div className='flex justify-between items-center '>
          <p className='titles '>Dizi Keşfet</p>
          <a href='#' className='py-7' >Tümü </a>
        </div>
        
          <div className='overflow-hidden'>
            <motion.div ref={carousel} className='overflow-hidden' whileTap={{ cursor: "grabbing" }}>
              
              <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='flex  w-full'>
              
                {discover_movies.splice(0, 5).map((image, index) => {
                  let img = "https://image.tmdb.org/t/p/w500" + image.poster_path
                  return (
                    <motion.div className='flex flex-wrap' key={image.id}>

                      <img className='rounded-sm  pointer-events-none px-5' src={img} alt="" />
                    </motion.div>)

                })}
              </motion.div>
            </motion.div>
          </div>


        <div>
          {
            setDiscover_movies!==[]?<Carousel movies={discover_movies}/>:console.log("hata")
          }
        </div>
      </div>
    </div>
  )
  }
  
}
