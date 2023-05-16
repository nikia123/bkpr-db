"use client"
import Image from 'next/image'
import MovieCard from '../MovieCard'
import { useContext } from 'react'
import { GlobalContext } from '../FavouritesProvider'
import styles from '../styles/displayTab.module.scss'
import altStyles from '../styles/favourites.module.scss'
import bkprBW from '../../public/images/bkpr-bw-sticker.png'

// Favourites Tab
// Renders a list of favourite movies
export default function Favourites() {

  const { state } = useContext(GlobalContext)
  const { favourites } = state

  // if no favourites, render this
  if (favourites.length == 0) {

    return (
      <div className={altStyles.favouritesCtr}>
        <p>It's pretty empty here...</p>
        <p>To see movies on this page, add them as a favourite. <br />Look for the BKPR sticker:</p>
        <div className={altStyles.stickerWrapper}>
            <Image
              src={bkprBW}
              fill='true'
              sizes='(max width: 1440px, 1080) 80px, (max width: 768px) 80px, 80px'
              alt='black and white bkpr sticker'
              priority='true'
            />
        </div>
      </div>
    )
  } else {

    return (
      
      <main className={styles.movieTabFavourites}>
        <h1>Favourites</h1>
        <div className={styles.movieCardContainer}>
            {favourites.map((movie) => (
                <MovieCard prop={movie} key={movie.id}/>
            ))}

        </div>

      </main>

      
    )
  }
}