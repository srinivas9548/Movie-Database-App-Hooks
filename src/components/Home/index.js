import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'

import Header from '../Header'
import MovieCard from '../MovieCard'

import './index.css'

let originalArray;

const Home = () => {
    const [moviesData, setMoviesData] = useState([])
    const [isMenubarOpen, setIsMenubarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [pageDetails, setPageDetails] = useState({
        pageArray: [],   // stores the current page's movies
        currentPage: 1,  // current page number
        totalPages: 1    // total pages available
    })

    const MOVIES_PER_PAGE = 10   // number of movies per page

    useEffect(() => {
        const getPopularMoviesData = async () => {
            const API_KEY = '96b7d4a3d469e7b177a4e7408dd82a69'
            const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            const response = await fetch(apiUrl)
            const data = await response.json()
            // console.log(data)
            const updatedData = data.results.map(eachResult => ({
                adult: eachResult.adult,
                backdropPath: eachResult.backdrop_path,
                genreIds: eachResult.genre_ids,
                id: eachResult.id,
                originalLanguage: eachResult.original_language,
                originalTitle: eachResult.original_title,
                overview: eachResult.overview,
                popularity: eachResult.popularity,
                posterPath: eachResult.poster_path,
                releaseDate: eachResult.release_date,
                title: eachResult.title,
                video: eachResult.video,
                voteAverage: eachResult.vote_average,
                voteCount: eachResult.vote_count,
            }))
            originalArray = updatedData
            const totalPages = Math.ceil(updatedData.length / MOVIES_PER_PAGE)  // number of pages in a component
            setMoviesData(updatedData)   // To store all movies
            setPageDetails({
                pageArray: updatedData.slice(0, MOVIES_PER_PAGE),  // show the first 10 movies
                currentPage: 1,
                totalPages
            })

            setIsLoading(false)
        }
        getPopularMoviesData()
    }, [])

    // console.log(moviesData)

    const toggleMenubar = () => {
        setIsMenubarOpen(prevState => !prevState)
    }

    const toggleSearchbar = () => {
        setIsSearchOpen(prevState => !prevState)
    }

    const onChangeSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    // console.log(pageDetails)

    const onClickSearchBtn = () => {
        const searchQuery = searchInput.toLowerCase()
        if (searchQuery === "") {
            // Reset to show the original movies with pagination starting from page 1
            setPageDetails({ 
                ...pageDetails, 
                pageArray: originalArray.slice(0, MOVIES_PER_PAGE), 
                totalPages: Math.ceil(originalArray.length / MOVIES_PER_PAGE)
            }) //if search input is empty
        } else {
            // Filter movies based on search input
            const getFilteredData = originalArray.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery)
            )
            const totalPages = Math.ceil(getFilteredData.length / MOVIES_PER_PAGE)
            setPageDetails({
                ...pageDetails,
                pageArray: getFilteredData.slice(0, MOVIES_PER_PAGE),  // slice to show the first 10 filtered movies
                totalPages,
                currentPage: 1
            })
        }
    }

    const goToPage = (pageNum) => {
        const startIndex = (pageNum - 1) * MOVIES_PER_PAGE
        const endIndex = pageNum * MOVIES_PER_PAGE
        setPageDetails({
            ...pageDetails,
            pageArray: moviesData.slice(startIndex, endIndex),
            currentPage: pageNum
        })
    }

    return (
        <>
            <Header
                isMenubarOpen={isMenubarOpen}
                toggleMenubar={toggleMenubar}
                isSearchOpen={isSearchOpen}
                toggleSearchbar={toggleSearchbar}
                searchInput={searchInput}
                onChangeSearchInput={onChangeSearchInput}
                onClickSearchBtn={onClickSearchBtn}
            />
            <div className="popular-movies-container">
                {isLoading ? (
                    <div className="loader-container">
                        <Oval type="Oval" color="#ffffff" height={50} width={50} />
                    </div>
                ) : (
                    <>
                        <h1 className="popular-movies-heading">Popular Movies</h1>
                        <ul className="movies-list-container">
                            {pageDetails.pageArray.length > 0 ? (
                                pageDetails.pageArray?.map(eachMovie => (
                                    <MovieCard key={eachMovie.id} movieDetails={eachMovie} />
                                ))
                            ) : (
                                <p className="no-movies-found">No Movies Found</p>
                            )}
                        </ul>

                        {/* Pagination Controls */}
                        <div className="pagination-container">
                            {Array.from({ length: pageDetails.totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={`page-button ${pageDetails.currentPage === index + 1 ? "page-active" : ""}`}
                                    onClick={() => goToPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Home