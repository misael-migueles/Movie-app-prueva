 import {MovieCard}  from "./MovieCard"
 import styles from "./CSS/Movies.module.css"
 import {Empty} from "../Empty/Empty"
 import {Spiner} from "./Spiner"
 import {useMovies} from "./useMovies"
 import InfiniteScroll from "react-infinite-scroll-component";
 
 export function Movies({search}){
  const { movies, loading, hasNextPage, fetchNextPage}= useMovies(search);
  

  if(!loading && movies.length === 0){
  return <Empty/>}
  
     return(
      <InfiniteScroll style={{overflow:"hidden"}}
       dataLength={movies.length}
       hasMore={hasNextPage || loading}
       next={()=>fetchNextPage()}
       loader={<Spiner/>}

      >
       <ul className={styles.Movies}>
             { movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
           )
          )
         }
       </ul>
      </InfiniteScroll>
    );
   }












