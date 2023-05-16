import Image from 'next/image'
import FavouriteSticker from './FavouriteSticker'
import styles from '../../styles/moreInfo.module.scss'

// More Info Page
export default async function MoreInfo({ params }) {

    // movie id is passed as a param from movie/[movie].jsx
    // redifines movie as params.movie
    const movie = params.movie

    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    )

    let res = await data.json()

    // adds isFavourite property to res for favourite tracking
    res = {
        ...res,
        isFavourite : false
    }

    function roundNumber(number, decimal_digit) {
        let powerOften = Math.pow( 10, decimal_digit );
        let result = Math.round( number * powerOften ) / powerOften;
        return result;
     }

    return (
        <div className={styles.moreInfoCtr}>
            <h1>{res.title}</h1>
            <div className={styles.subHeaderInfo}>
                <p>{res.release_date.slice(0,4)}</p>
                <p>{Math.floor(res.runtime / 60)}h {res.runtime % 60}m</p>
            </div>
            

            <div className={styles.posterImgWrapper}>
                <Image 
                    src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} 
                    alt={res.title} 
                    fill='true'
                    sizes="(max width: 1440px) 1000px"
                    priority />
            </div>

            <p className={styles.rating}>Rating: {roundNumber(res.vote_average, 1)} / 10</p>
            <p className={styles.tagline}>{res.tagline}</p>
            <p className={styles.summary}>
                Summary: <br />
                {res.overview}
            </p>
            
            <div className={styles.stickerWrapper}>
                <FavouriteSticker movie={res}/>
            </div>
            
            
        </div>
    )
}