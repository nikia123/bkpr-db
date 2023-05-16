import MoreInfo from './MoreInfo'
import styles from '../../styles/moreInfo.module.scss'

// More Info Page
 export default function MovieInfo({ params }){


    return (

        <div>
            <MoreInfo params={params} />
        </div>
 
    )
}