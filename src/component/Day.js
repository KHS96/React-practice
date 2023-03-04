import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
export default function Day(){
    const { day } = useParams();    
    // const [words, setWords] = useState([]);
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

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
    <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
}