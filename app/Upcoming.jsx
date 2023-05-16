import MovieCard from './MovieCard';
import ReelWrapper from './ReelWrapper'
import styles from './styles/displayTab.module.scss';

// Upcoming Reel
export default async function Upcoming() {

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  )

  const res = await data.json()

  let limit12 = res.results.slice(0, 12)

  // adds isFavourite property to res for favourite tracking
  limit12 = limit12.map((movie) => ({
    ...movie,
    isFavourite : false
  }))


  return (
    <main className={styles.movieTabUpcoming}>
      <h2 >Upcoming</h2>
      <ReelWrapper child='upcoming'>
          {limit12.map((movie) => (
              <MovieCard prop={movie} key={movie.id}/>
          ))}
      </ReelWrapper>
    </main>
  )
  }