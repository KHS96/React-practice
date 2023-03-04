import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
export default function Day(){
    const { day } = useParams();    
    // const [words, setWords] = useState([]);
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const prev_day = Number({day}.day)-1;
    const next_day = Number({day}.day)+1;
    // console.log(words.length);
    function del(){
        if(window.confirm("삭제 하시겠습니까?")){
        if(words.length!=0){
            console.log({words});
            {words.map(word =>(
                fetch(`http://localhost:3001/words/${word.id}` , {
                    method: "DELETE"
                })
                .then(history.push("/"))
                )
            )}
            }
        }
    }
     

    return <>
    <h2>Day {day}</h2>
    <button onClick={del}>Day 삭제</button>
    <div>
        { prev_day >= 1 &&  <Link to={`/day/${prev_day}`} className="link">이전 </Link>}
        { next_day <= days.length  && <Link to={`/day/${next_day}`} className="link">다음 </Link>}
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