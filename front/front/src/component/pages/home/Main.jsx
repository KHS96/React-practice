import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import Chunsik from "./Chunsik";
import EventBanner from "./EventBanner";
import RecommandMd from "./RecommandMd";

export default function Main(){

 
    return(
        <>
        <Header />
        <EventBanner />
        <RecommandMd />
        <Chunsik /> 


        </>
    )
}