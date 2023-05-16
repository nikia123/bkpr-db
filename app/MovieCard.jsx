"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from './FavouritesProvider'
import styles from './styles/movieCard.module.scss'
import btnStyles from './styles/favSticker.module.scss'
import shelf from '../public/images/shelf.png'



// Movie Card
// { prop } is passed as a prop from parent component: reels or favourites
export default function MovieCard({ prop }) {
  const { state, removeFavourite, addFavourite } = useContext(GlobalContext)
  const { favourites } = state
  const [isFavourite, setIsFavourite] = useState(false)

  // Reset the state values when the component mounts
  useEffect(() => {
    setIsFavourite(favourites.some((favourite) => favourite.id === prop.id))
  }, [favourites, prop.id])

  function roundNumber(number, decimal_digit) {
    let powerOfTen = Math.pow(10, decimal_digit)
    let result = Math.round(number * powerOfTen) / powerOfTen
    return result
  }

  // if true - renders remove sticker with function
  const handleAddToFavourites = () => {
    addFavourite(prop)
  }

  // if false - renders add sticker with function
  const handleRemoveFromFavourites = () => {
    removeFavourite(prop.id)
  }


  // if is.favourite is true, render remove sticker
  // if is.favourite is false, render add sticker
  return (
    <div className={styles.movieCard}>
      <Link prefetch={false} href={`movie/${prop.id}`}>
        <div className={styles.posterWrapper}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${prop.poster_path}`}
            alt={prop.title}
            className={styles.moviePoster}
            sizes="(min width: 1440px) 600px, (max width: 768px) 300px, 300px"
            fill='true'
            priority='true'
          />
        </div>
      </Link>

      <h3>{prop.title}</h3>

      {isFavourite ? (
        <button
          onClick={handleRemoveFromFavourites}
          className={btnStyles.favBtnHome}
        >
          <Image
            src='/images/home-sticker.png'
            alt='remove sticker'
            height={80}
            width={80}
            priority='true'
          />
        </button>
      ) : (
        <button
          onClick={handleAddToFavourites}
          className={btnStyles.favBtnHome}
        >
          <Image
            src='/images/bkpr-bw-sticker.png'
            alt='add sticker'
            height={80}
            width={80}
            priority='true'
          />
        </button>
      )}

      <p>{roundNumber(prop.vote_average, 1)} / 10</p>

      <div className={styles.shelfWrapper}>
        <Image src={shelf} alt='floating shelf' 
          fill='true' 
          sizes="(max width: 1440px, 1080px) 280px, (max width: 768px) 140px, 140px"
          priority='true' />
      </div>
    </div>
  )
}
