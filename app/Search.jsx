"use client"
import { useState } from 'react'
import Link from 'next/link'

// Search Bar
export default function Search() {

    // State of search bar query
    const [query, setQuery] = useState('')

    // Get the query string from the search bar on change
    function getQuery() {
        const queryStr = document.getElementById('search').value
        setQuery(queryStr)
    }


    return (      
    <form action="#">
        <input type="text" onChange={getQuery} id="search" placeholder="Search For a Movie..." />
        <Link prefetch={false} href={`/search/${query}`}>
            <button>Search</button>
        </Link>
    </form>
    ) 
} 