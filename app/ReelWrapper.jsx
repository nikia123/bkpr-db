
"use client"
import styles from './styles/displayTab.module.scss';
import { useState, useEffect } from "react"

// Reel Wrapper
export default function ReelWrapper({ child, children }) {
  const [displayElement, setDisplayElement] = useState(true);
  const [popularSize, setPopularSize] = useState(false);
  const [topRatedSize, setTopRatedSize] = useState(false);
  const [upcomingSize, setUpcomingSize] = useState(false);
  const [inTheatresSize, setInTheatresSize] = useState(false);
  const [action, setAction] = useState('Collapse');

  // Reset the state values when the component mounts
  useEffect(() => {
    setPopularSize(false);
    setTopRatedSize(false);
    setUpcomingSize(false);
    setInTheatresSize(false);
  }, []);

  function defineBtnText() {
    if (!displayElement) {
      setAction('Collapse');
    } else {
      setAction('Expand');
    }
  }

  function toggle(child) {
    switch (child) {
      case 'popular':
        setPopularSize(!popularSize);
        setDisplayElement(popularSize);
        defineBtnText();
        break;
      case 'topRated':
        setTopRatedSize(!topRatedSize);
        setDisplayElement(topRatedSize);
        defineBtnText();
        break;
      case 'upcoming':
        setUpcomingSize(!upcomingSize);
        setDisplayElement(upcomingSize);
        defineBtnText();
        break;
      case 'inTheatres':
        setInTheatresSize(!inTheatresSize);
        setDisplayElement(inTheatresSize);
        defineBtnText();
        break;
      default:
        break;
    }
  }

  return (
    <>
      <button className={styles.headerButton} onClick={() => toggle(child)}>{action}</button>
      <div className={styles.movieCardContainer} id={child} style={displayElement ? { display: "grid" } : { display: 'none' }}>
        {children}
      </div>
    </>
  );
}
