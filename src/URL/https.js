const callAPI = "https://api.themoviedb.org/3";

  export function get(path){
     return fetch(callAPI + path, {
         headers: {
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGViMTQ4MWI5OGQ5YzVlMmQzMTI3NTc5NzdiNWM1YSIsInN1YiI6IjYzZTY5NzBiMmZjY2VlMDA4ZmQwMjEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uwGCmEV9-eeLqYs6vUQ2f5OQYCuAqG9cPKK5mClvOAk ",
            "Content-Type":"aplication/json;charset=utf-8",
         },
      }).then((result) => result.json())
}

