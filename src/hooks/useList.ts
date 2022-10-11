import { useState,useEffect } from "react"
import {useRef} from "react";
import { listsGeneral } from "../data/lists";

export const useList=()=>{

    const [lists,setLists]=useState<any[]>([])
 
        const generateLists=()=>{
            setLists(listsGeneral)
        }
     
        useEffect(()=>{
          generateLists()
        },[])
                
                
   /*  const [listAll,setListAll]=useState(['Item1','Item2','Item3']);
    const [listDoing,setListDoing]=useState<Array<string>>([]);
    const [moveItem,setMoveItem]=useState<number|undefined|null>(undefined);
    const dragItem:any=useRef();
    console.log("dragItemStart: ",dragItem);
    const dragStart=(e:any,position:number)=>{
        dragItem.current=position;
       setMoveItem(dragItem.current);
        console.log(e.target.innerHTML);
    }
    const dragOverItem:any=useRef();
    const dragEnter=(e:any,position:number)=>{
        dragOverItem.current=position;
        console.log(e.target.innerHTML);
    }
    const drop=(e:any)=>{
        const copyListItems=[...listAll];
        const dragItemContent=copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current,1);
        copyListItems.splice(dragOverItem.current,0,dragItemContent);
        
        dragItem.current=null;
        dragOverItem.current=null;
        setListAll(copyListItems);
    }
    const dropDoing=(e:any)=>{
        const copyListItems=[...listAll];
        const dragItemContent:any=copyListItems[moveItem];
        copyListItems.splice(dragItem.current);
       
        console.log("copea con : ",dragItemContent)
        console.log("el dragitem : ",dragItem.current)
        console.log("copea a : ",copyListItems)
        dragItem.current=null;
        dragOverItem.current=null;
        const move=[dragItemContent]
        console.log("move ",[dragItemContent])
        setListDoing(move);
    }
    const dragOver=(e:any)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect="move";
    } */
    return {lists}
    /* listAll,setListAll,listDoing,setListDoing,dragStart,dragEnter,drop,dropDoing,dragOver */
}