"use client";

import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../FavouritesProvider'
import removeSticker from '../../../public/images/home-sticker.png'
import addSticker from '../../../public/images/bkpr-bw-sticker.png'
import styles from '../../styles/favSticker.module.scss'


// Favourite Sticker, used in movie/[movie].jsx
// { movie } is passed as a prop from movie/[movie].jsx
export default function FavouriteSticker ({ movie }) {

    const { state, removeFavourite, addFavourite } = useContext(GlobalContext)
    const { favourites } = state
    const [isFavourite, setIsFavourite] = useState(false)


    useEffect(() => {
        setIsFavourite(favourites.some((favourite) => favourite.id === movie.id))
    }, [favourites, movie.id])


    // checkes for existing favourites
    // if true - renders remove sticker with function
    // if false - renders add sticker with function
    if (favourites.length > 0) {
        favourites.map((favourite) => {
            
            if (favourite.id == movie.id) {
                movie.isFavourite = true;
            } 
            
        })
    } else {
        movie.isFavourite = false;
    }
    
    
    
    if (movie.isFavourite == true) {
        return(
            <div>
                <button 
                    onClick={() => removeFavourite(movie.id)} 
                    className={styles.favBtn}
                >
                <Image 
                    src={removeSticker} 
                    alt='remove sticker'
                    fill='true'
                    sizes='(max width: 1440px, 1080) 80px, 80px'
                    priority ='true' /> 
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <button
                    onClick={() => addFavourite(movie)}
                    className={styles.favBtn}
                >
                <Image 
                    src={addSticker}
                    alt='add sticker'
                    fill='true'
                    sizes='(max width: 1440px, 1080) 80px, 80px'
                    priority ='true' /> 
                </button>
            </div>
        )
    }
    
}
