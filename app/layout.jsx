
import Link from 'next/link'
import Image from 'next/image'
import FavouritesProvider from './FavouritesProvider'
import styles from './styles/siteStyles.module.scss'
import bkprYellow from '../public/images/bkpr.png'
import bkprGreen from '../public/images/home-sticker.png'
import bkprBlue from '../public/images/about-sticker.png'
import vhs from '../public/images/vhs.png'

// Root Layout
export const metadata = {
  title: 'Be Kind Please Rewind',
  description: 'A Movie Database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={styles.siteBody}>
      <FavouritesProvider>
        
        <nav className={styles.headerNav}>
          <Link prefetch={true} href='#'>
            <div className={styles.homeBtn}>
            
              <div className={styles.btnImgWrapper}>
                  <Image
                    src={bkprYellow}
                    fill='true'
                    sizes='(max width: 1440px, 1080) 80px, 80px'
                    alt='yellow bkpr sticker'
                    priority='true'
                  />
              </div>

              <h1>BKPR T-120</h1>
              
            </div>
          </Link>
          <ul>   
                <li><Link prefetch={true} href='/favourites'>Favourites</Link></li>
                <li><Link prefetch={true} href='/about'>About</Link></li>
          </ul>
        </nav>
        <div className={styles.flexContainer}>

        {children}
        </div>
        </FavouritesProvider>
        <footer>
          <nav className={styles.footerNav}>
            <ul>   
              <li>
                <Link prefetch={true} href='#'>
                <div className={styles.btnImgWrapper}>
                <Image
                  src={bkprYellow}
                  fill='true'
                  sizes='(max width: 1440px, 1080) 80px, 80px'
                  alt='yellow bkpr sticker'
                  priority='true'
                />
                </div>
                Home
                </Link>
              </li>

              <li>
                <Link prefetch={true} href='/favourites'>
                <div className={styles.btnImgWrapper}>
                <Image
                  src={bkprGreen}
                  fill='true'
                  sizes='(max width: 1440px, 1080) 80px, 80px'
                  alt='green bkpr sticker'
                  priority='true'
                />
                </div>
                Favourites
                </Link>
              </li>

              <li>
                <Link prefetch={true} href='/about'>
                <div className={styles.btnImgWrapper}>
                <Image
                  src={bkprBlue}
                  fill='true'
                  sizes='(max width: 1440px, 1080) 80px, 80px'
                  alt='blue bkpr sticker'
                  priority='true'
                />
                </div>
                About
                </Link>
              </li>
            </ul>  
          </nav>

          <div className={styles.footerInfo}>
            <p>© 2023 - Be Kind Please Rewind  <br/>For Educational Purposes Only</p>
            <Image src={vhs} alt="VHS Logo" />
          </div>
      
          </footer>     
        </body>
    </html>
  )
}