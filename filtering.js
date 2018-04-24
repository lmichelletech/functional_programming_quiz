//filter practice
//ilter through movie array for rating

const movies = [
    {name: "Wonder Woman", rating: "PG-13"},
    {name: "The Shining", rating: "R"},
    {name: "Finding Nemo", rating: "G"},
]

const newMovieArray = movies.filter(function(movie){
    //can replace 1 for true and 0 for false
    return (movie.rating === "PG-13") ? true : false 
})

console.log(newMovieArray)