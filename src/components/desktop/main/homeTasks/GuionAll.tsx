import { useEffect } from "react";

interface title{
title:string,
color:string,
cards:any,
}
const GuionAll=({title,color,cards}:title)=>{
    useEffect(()=>{

    },[color])
    return(
        <section className="xl:flex xl:flex-grow xl:items-center xl:gap-[8px] xl:mb-[20px]">
            <div className={`xl:rounded-full xl:w-[14px] xl:h-[14px] xl:${color}`}></div>
            <span className="font-RobotoMono font-bold text-white">{title} ({cards.length})</span>
        </section>
    )
}
export default GuionAll;