//Api

const api = 'http://www.omdbapi.com/?apikey=8711fce&t='


let notfound = document.getElementById('notfound');
let movietitle = document.getElementById('movietitle')
let runtime = document.getElementById('runtime')
let movieplot = document.getElementById('movieplot')
let date = document.getElementById('date')
let genre = document.getElementById('genre')
let actors= document.getElementById('actors')
let collection = document.getElementById('collection')
let awards = document.getElementById('awards')
let director = document.getElementById('director')
let writer = document.getElementById('writer')
let rating = document.getElementById('rating')
let movieposter = document.getElementById('movieposter')
let found = document.getElementById('found')
found.classList.add('d-none2')


function searchMovie(){
    let movieName= document.getElementById('movieName');
    let query= api + movieName.value;
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
       
        console.log(data)
        if (data.Error) {
            notfound.classList.remove('d-none');
            found.classList.remove('moviecontainer')
            found.classList.add('d-none2')

            document.getElementById('name').innerText = movieName.value;
        } else {
            found.classList.add('moviecontainer')
            found.classList.remove('d-none2')
            notfound.classList.add('d-none')
            console.log('Found')
            movietitle.innerText = data.Title;
            runtime.innerText = data.Runtime
            movieplot.innerText = data.Plot;
            date.innerText = data.Released;
            genre.innerText = data.Genre;
            actors.innerText = data.Actors;
            collection.innerText = data.BoxOffice;
            awards.innerText = data.Awards;
            director.innerText = data.Director;
            writer.innerText = data.Writer;
            rating.innerText = data.imdbRating;
            movieposter.src = data.Poster
           
        }
    })
}