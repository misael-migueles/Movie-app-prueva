import { useInfiniteQuery } from "react-query";
import { get } from "../URL/https";

  export function useMovies(search){
    const result=useInfiniteQuery(["movies", search], 
    ({pageParam = 1})=>{
      const buscarURL= search
         ? "/search/movie?query="+search+"&page="+pageParam
         : "/discover/movie?page="+pageParam;
        return get(buscarURL);
    },{
    getNextPageParam:(lastPage)=>{
     if(lastPage.pague === lastPage.total_pages)return false;
     return lastPage.page +1;
    },
   }
  );
    
   const movies= result.data?.pages.reduce((previe, page)=> previe.concat(page.results), []) ?? [];
   return {...result, movies};}
  
