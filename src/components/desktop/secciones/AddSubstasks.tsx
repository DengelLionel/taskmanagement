import { useEffect, useState } from "react"
import { useAddListAndCardBoard } from "../../../hooks/useAddListAndCardBoard"
import {listSub} from "../../../Datauser/substasks";
import { useContext } from 'react';
import { ListCardBoardContext } from "../../../context/ListsCardsBoards";
interface addSubstask{
    value:any,
    deleteItem?:any,
   
}
const AddSubstasks=({value,deleteItem}:addSubstask)=>{
    
    const {DataDelete}=useAddListAndCardBoard()
 const {setBooleanSubTask,booleanSubTask,valueDelete}=useContext(ListCardBoardContext);
/* const list=JSON.parse(localStorage.getItem("listas")) */
   

    console.log("A eliminar ",valueDelete)
    console.log("bool ",booleanSubTask)
    return(
      <article key={value} className='xl:flex xl:flex-grow xl:gap-[35px] transition-all duration-1000'>
      <input className='xl:w-[463px] xl:p-[15px] xl:outline-none xl:bg-transparent xl:border-2 xl:border-bordeInput xl:mt-[11px] xl:mb-[11px] xl:text-white xl:pl-[40px] ' type="text"
      placeholder='e.g Take Coofe Break' 
      /> 
      <button onClick={()=>{deleteItem();setBooleanSubTask(!booleanSubTask);DataDelete()}}>
        <svg className='fill-current text-bordeInput hover:text-white' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z" fill="text-borderInput hover:text-white"/>
  </svg>
  
      </button>
      </article>
      )
   

  }
  export default AddSubstasks;