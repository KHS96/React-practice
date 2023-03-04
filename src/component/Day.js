import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
export default function Day(){
    const { day } = useParams();    
    // const [words, setWords] = useState([]);
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch("http://localhost:3001/days");
    const prev_day = Number({day}.day)-1;
    const next_day = Number({day}.day)+1;

    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data=>{
    //         setWords(data);
    //     })
    // },[day])


    // console.log(wordList);

    return <>
    <h2>Day {day}</h2>
    <div>
        { prev_day >= 1 &&  <Link to={`/day/${prev_day}`} className="link">이전 </Link>}
        { next_day <= days.length  && <Link to={`/day/${next_day}`} className="link">다음 </Link>}
        {/* <Link to={`/day/${prev_day}`} className="link">이전 </Link> */}
        {/* <Link to={`/day/${next_day}`} className="link">다음 </Link> */}
    </div>
    {words.length === 0 && (<span>Loading...</span>)}
    <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
}