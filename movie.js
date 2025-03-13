const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
//   Implement the following logic:
//   Map to convert watchTime from minutes to hours.
//   Filter movies with a rating above 7.5.
//   Reduce to find the total watch time of all highly-rated movies.
//   Map to extract only the title and watch time of the best movies.
//   Expected Output:
//   List of highly-rated movies with watch time in hours.
//   Total watch time of these movies.

function shiva(movies){
    let watchtime=movies.map(movies => ({
        ...movies,
        watchTime : (movies.watchTime / 60).toFixed(2)
    }));

    let highlyreate = watchtime.filter(movies => movies.rating > 7.5);
    console.log("Heigh rate movies:",highlyreate);

    let totaltime= highlyreate.reduce((sum , movies) => sum + parseFloat(movies.watchTime),0)
    console.log("Heigh Time:",totaltime + "hours" );

    let bestmovies= highlyreate.map(movies => ({
        title : movies.title,
        watchTime : movies.watchTime + "hours"
    }));
    console.log("Best Movies;", bestmovies)
}
shiva(movies)