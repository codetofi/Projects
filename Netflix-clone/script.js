let movies=[
    {
        name:"MoonLight",
        poster:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ba32041615387.57acc4bf0b15f.jpg",
        rating:8.7
    },
    {
        name:"Joker",
        poster:"https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_1f3f78b1-3366-4394-a8b2-4d8431592dac.jpg?v=1579504957",
        rating:8.9

    },
    {
        name:"Interstellar",
        poster:"https://mir-s3-cdn-cf.behance.net/project_modules/hd/8d8f28105415493.619ded067937d.jpg",
        rating:8.4

    },
    {
        name:"Jhon Wick",
        poster:"https://www.tallengestore.com/cdn/shop/products/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-2_c927bf3a-7e64-4c67-b05f-960c2f2cd3d0.jpg?v=1649071611",
        rating:7.8

    },
    {
        name:"Venom",
        poster:"https://m.media-amazon.com/images/M/MV5BYzc5OGE4MjMtOGU4MC00ZWZlLWIzY2YtN2Y4MTY5YTE1YjUxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        rating:6.5

    },
    {
        name:"Looper",
        poster:"https://go.rappler.com/images/bestmovieposters-looper-20121221-06.jpg",
        rating:6.8

    },
    {
        name:"Blade Runner 2049",
        poster:"https://www.al.com/resizer/PUZU2gLOrYwh2qXwlXOq1231xso=/800x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/entertainment_impact/photo/23544203-standard.jpg",
        rating:7.4

    },
    {
        name:"The Wolverien",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOo9nejekmwtUIaFw-H_ZVZgp7vtTMFHs0A&usqp=CAU",
        rating:6.3

    },
    {
        name:"Avatar",
        poster:"https://www.tallengestore.com/cdn/shop/products/Avatar_9ea2c3a8-930b-4c06-866f-7e417ddde0d7.jpg?v=1634645786",
        rating:8.6

    },
    {
        name:"Titanic",
        poster:"https://img.fruugo.com/product/6/31/14366316_max.jpg",
        rating:8.9
    },
    {
        name:"Oppenhimer",
        poster:"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        rating:7.8
    },
    {
        name:"1917",
        poster:"https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7_large.jpg?v=1582781089",
        rating:5.9
    },
    {
        name:"Whiplash",
        poster:"https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        rating:7.6
    },
    {
        name:"Inception",
        poster:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        rating:8.9
    },
    {
        name:"Wrath Of A Man",
        poster:"https://m.media-amazon.com/images/M/MV5BZTQzNzI0OTktYjhmMS00MTE4LWI5YjUtMDA3ZGEzNmU1Y2M0XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
        rating:5.6
    },
    {
        name:"Brave Heart",
        poster:"https://i.ebayimg.com/images/g/J6cAAOSweW5U5lyB/s-l1600.jpg",
        rating:6.1
    },
    {
        name:"Smile",
        poster:"https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
        rating:6.2
    },
    {
        name:"Top Gun",
        poster:"https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg",
        rating:7.3
    },
    {
        name:"Sprilae",
        poster:"https://m.media-amazon.com/images/M/MV5BNGM2ZTc2M2YtNmE4Ny00YmI3LTlmNzctOGRjODY2ZWEzZmZmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        rating:5.4
    },
    {
        name:"Sherlock Holmes",
        poster:"https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_FMjpg_UX1000_.jpg",
        rating:6.9
    },
    {
        name:"Anabelle",
        poster:"https://m.media-amazon.com/images/M/MV5BYmI4NDNiMmQtZTFkYi00ZDVmLThlYTAtMWJlMjU1M2I2ZmViXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
        rating:6.5
    },
    {
        name:"Minions",
        poster:"https://m.media-amazon.com/images/M/MV5BMTUwNjcxNzAwOF5BMl5BanBnXkFtZTgwNzEzMzIzNDE@._V1_FMjpg_UX1000_.jpg",
        rating:7.4
    },
    {
        name:"Final Destination V",
        poster:"https://m.media-amazon.com/images/M/MV5BMTgyOTExNDc1M15BMl5BanBnXkFtZTcwMDA0MTA4NQ@@._V1_FMjpg_UX1000_.jpg",
        rating:4.3
    },
    {
        name:"Mortal Kombat",
        poster:"https://m.media-amazon.com/images/M/MV5BNjY5NTEzZGItMGY3My00NzE4LThkYTUtYjJkNzk3MDBiMWE3XkEyXkFqcGdeQXVyNzg5MDE1MDk@._V1_FMjpg_UX1000_.jpg",
        rating:7.1
    },
    {
        name:"RAW",
        poster:"https://m.media-amazon.com/images/M/MV5BMTU3MDUxMDI0MV5BMl5BanBnXkFtZTgwMzk3OTg3MDI@._V1_FMjpg_UX1000_.jpg",
        rating:5.7
    },
    {
        name:"Unforgiven",
        poster:"https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        rating:3.4
    },
    {
        name:"The Shak",
        poster:"https://m.media-amazon.com/images/M/MV5BN2UzZTM2ODktNGY5MC00NzBiLWE1ZDItNTY2ZTkzZjlkODJiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        rating:4.3
    },
    {
        name:"Tne Ruins",
        poster:"https://m.media-amazon.com/images/M/MV5BYzQyODAyYzctMjg5YS00NmY3LTljZjctMDNkNGU1MjdmN2RlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
        rating: 8.2
    },
    {
        name:"The Wolf Of Wall Street",
        poster:"https://www.themoviedb.org/t/p/original/3510HNgfSUegvMpy09sMfwFtvNM.jpg",
        rating:9.5
    },
    {
        name:"Uncharted",
        poster:"https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg",
        rating:7.5
    },
    {
        name:"The Girl Next Door",
        poster:"https://flxt.tmsimg.com/assets/p33888_p_v10_ag.jpg",
        rating:6.3
    },
    {
        name:"Roma",
        poster:"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/ROMA-web.jpg",
        rating:7.8
    }

 

    
]
function searchmovies(){
    var moviename = document.getElementById('search').value;
    if(moviename!==""){
       let result= movies.filter(function(movie){
        return movie.name.toUpperCase().includes(moviename.toUpperCase())
       })
       displayMovies(result)
    }
    else{
        displayMovies(movies);
    }
}

function displayMovies(data){
    // let movie = document.createElement("div");
    // movie.classList.add("movies");
    // let overlay = document.createElement("div");
    // overlay.classList.add("overlay")
    // movie.appendChild(overlay);
    // let details = document.createElement("div");
    // details.classList.add("details");
    // overlay.appendChild(details);
    // console.log(movie);
    // // let name = documen.createElement("H1");
    // // details.appendChild(name);
    let htmlStr=``;
    for(let i=0;i<data.length;i++){
        htmlStr = htmlStr+`
        <div class="movie">
        <div class="overlay">
            <div class="video">

            </div>
            <div class="details">
                <h1>${data[i].name}</h1>
                <h3>IMDB : ${data[i].rating}</h3>
                <h3>Chadwick Boseman | Taylor | Fredrick </h3>
            </div>
        </div>
        <img class="poster" src="${data[i].poster}">
    </div>
        `
 
    document.getElementById('movies').innerHTML=htmlStr;
   
    }

}
displayMovies(movies);
