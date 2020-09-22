var favoriteMovies = [];

function addFavoriteMovie (movieName) {
    if (movieName.includes("The") !== true) {
        favoriteMovies.push(movieName);
    } 
} 


var NumberOfMovies = favoriteMovies.length;
function printFavoriteMovies() {
    console.log("Favorite Movies:.." + NumberOfMovies)
    var i = 0;

    while (i < NumberOfMovies) {
        favoriteMovies[i];
        i = i + 1;
        
    }
for (var i = 0; i < favoriteMovies.length; i++)
    console.log(favoriteMovies[i]);
}

addFavoriteMovie("Harry Potter")
addFavoriteMovie(" The WizardOfOz")
addFavoriteMovie("Lala Land")
addFavoriteMovie(" The GreatestShowman")


printFavoriteMovies()