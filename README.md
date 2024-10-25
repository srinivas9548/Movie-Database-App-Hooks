# Movie Database App

This application, inspired by popular video-on-demand websites, provides an extensive database of available movie content with features including browsing popular, top-rated, and upcoming movies, searching for specific movies, and viewing detailed information for each movie.

## Table of Contents
- [Pages and Routes](#pages-and-routes)
- [Features](#features)
- [API Details](#api-details)
- [Project Setup](#project-setup)

## Pages and Routes

1. **Popular Movies Page (Home Page)**: Displaying popular movies.
2. **Top Rated Movies Page**: Displaying top-rated movies.
3. **Upcoming Movies Page**: Displaying upcoming releases.
4. **Single Movie Details Page**: Showing detailed information for a selected movie.
5. **Searched Movies Page**: Displayed upon performing a search.

## Features

### Global Navbar
- The title "movieDB" on the left side of the navbar.
- Navigation buttons to switch between Popular, Top Rated, and Upcoming movies.
- Search bar with a search button to input and submit search queries.
  
### Pages
- **Popular Movies Page**: Grid of popular movies with an image, name, rating, and "View Details" button.
- **Top Rated Movies Page**: Grid of top-rated movies with similar details as above.
- **Upcoming Movies Page**: Grid of upcoming movies, similar layout.
- **Single Movie Details Page**: Detailed page for each movie with sections for movie details and cast details.
- **Searched Movies Page**: Displayed upon search, showing results with similar details as above.

## API Details
- **Get Popular Movies**: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
- **Get Top Rated Movies**: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
- **Get Upcoming Movies**: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
- **Get Single Movie Details**: `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`
- **Get Movie Cast Details**: `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&language=en-US`
- **Get Searched Movies**: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=1`

Replace `${API_KEY}`, `${MOVIE_ID}`, and `${MOVIE_NAME}` with actual values when using these endpoints.

## Project Setup
1. Clone this repository or download the project files.
2. Sign up for an API Key at [The Movie Database API](https://www.themoviedb.org/documentation/api).
3. Insert your API Key into the project where API calls are made.
4. Run the project in your local development environment.
