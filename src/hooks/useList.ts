import { useState,useEffect } from "react"
import {useRef} from "react";
import {lists,listSub} from "../Datauser/substasks";
import { useContext } from "react";
import { ListCardBoardContext } from "../context/ListsCardsBoards";
export const useList=()=>{
    const [listss,setListss]=useState<any[]>([])
    
    const {title,description,updateCard,setOpenAddList,dataInputSubTask}=useContext(ListCardBoardContext)
    const AddCard=()=>{
        
        const url=lists;
          console.log("substext ",dataInputSubTask)
        url?.map((list:any)=>{
            if(list.id===1){
                /* const addListSubContent=listSub?.map((list:any)=>) */
             
              
                let listsub:any=[{mount:listSub.length+" substacks",list:dataInputSubTask}]; 
                list.cards.push({id:list.cards.length+1,title:title,description:description,substasks:[]})
                list.cards[list.cards.length-1].substasks.push(listsub);
                console.log("array okk",list.cards[list.cards.length-1])
                setOpenAddList(false);
            }
            
        })
        
    }
     const ShowData=()=>{
      /*   const url=import.meta.env.VITE_URL_API_DEN; */
        setListss(lists);
      /*   fetch(url)
        .then(res=>
            res.json()
            )
        .catch(error=>console.error("error: ",error))
        .then(response=>setLists(response)) */
    
        
       
    } 
     
        useEffect(()=>{
            ShowData();
            if(updateCard===true){
                ShowData();
            }
        },[updateCard])
                
                
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
    return {listss,AddCard}
    /* listAll,setListAll,listDoing,setListDoing,dragStart,dragEnter,drop,dropDoing,dragOver */
}