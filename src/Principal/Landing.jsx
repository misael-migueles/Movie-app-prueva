import { useSearchParams } from "react-router-dom";
import {Movies} from "./Movies"
import {useDebounce} from "./Debounce";

    export function Landing(){
    const [query]=useSearchParams();
    const search= query.get("search");


    const debouSearch = useDebounce(search, 300);
    return(
    <div>
    <Movies key={debouSearch} search={debouSearch}/>
    </div> 
    )
}


