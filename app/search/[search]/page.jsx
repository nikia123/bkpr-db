import MovieCard from "@/app/MovieCard";

import styles from '../../styles/displayTab.module.scss'

// Search Page
// Renders a list of movies based on search query
// { params } is passed as a prop from search/[search].jsx
export default async function Search({ params }) {


    const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${params.search}&page=1&include_adult=false`
    )

    const res = await data.json()

    let limit12 = res.results.slice(0, 12)


    return (
        <div className={styles.movieTabSearch}>
            <h1>Search Results:</h1>
            <div className={styles.movieCardContainer}>
                {limit12.map((movie) => (
                    <MovieCard prop={movie} />
                ))}
            </div>
        </div>
    )
    


}