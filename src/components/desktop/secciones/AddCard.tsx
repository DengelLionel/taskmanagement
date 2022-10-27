import React, { useEffect, useState } from 'react'
import Modal from '../main/Modal'
import { useAddListAndCardBoard } from '../../../hooks/useAddListAndCardBoard';
import { useContext } from 'react';
/* import { useRef } from 'react'; */
import { listSub } from "../../../Datauser/substasks";
import AddSubstasks from './AddSubstasks';
import { ListCardBoardContext } from '../../../context/ListsCardsBoards';
const AddCard = () => {
  const {CloseAddList,setTitle,setDescription,mountSubstask}=useAddListAndCardBoard()
  const {valorNewSubTask,setValueDelete,booleanSubTask,setBooleanSubTask,list,setList}=useContext(ListCardBoardContext)
  
 
  const DataUpdate=()=>{
    setList(listSub)
  }

/*   const Ref=useRef()
  const Data=Ref.current */

  useEffect(()=>{


    if(valorNewSubTask===true){
      DataUpdate()
    }
    else if(booleanSubTask===true){
      DataUpdate()
     
      console.log("actualizado ",list)
    }
    
},[valorNewSubTask,booleanSubTask,list])
  console.log("listt",list)
  return (
    <Modal CloseAddList={CloseAddList}>
    
        <span className='font-Roboto font-bold text-[24px] text-white'>Add New Task</span> <br />
        <span className='font-Roboto font-bold text-[16px] text-textSecundary2'>Title</span> <br />
        <input className='w-full p-[15px] outline-none bg-transparent border-2 border-bordeInput mt-[11px] mb-[11px] rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl text-white pl-[40px] ' type="text"
        placeholder='e.g Take Coofe Break' 
        onChange={(e)=>setTitle(e.target.value)}
        />  
        
        <span className='font-Roboto font-bold text-[16px] text-textSecundary2'>Description</span> <br />
        <textarea className='w-full h-[122px] resize-none p-[15px] outline-none bg-transparent border-2 border-bordeInput mt-[11px] rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl text-white pl-[40px]'
         placeholder='e.g Take Coofe Break in the work and '
         onChange={(e)=>setDescription(e.target.value)}
         ></textarea><br />
        <span className='font-Roboto font-bold text-[16px] text-textSecundary2'>Substasks</span><br />
        <section className={` h-[80px] overflow-y-auto`}>
        { list?.map((value:any)=>{
        
          return(
            <AddSubstasks 
             deleteItem={()=>setValueDelete(value.id)}
             value={value.id}/>
          )
      
        })
      }
        </section>
        

        <section className='flex flex-col justify-center items-center gap-[15px] mt-[10px]'>
        <button onClick={()=>mountSubstask()} className='bg-whitePale w-[463px] text-blueTwo font-Roboto font-bold text-[16px] rounded-bl-full rounded-br-full rounded-tr-full rounded-tl-full pt-[14px] pb-[14px] ' >+ Add New Substask</button>
        <button className='bg-buttoncolor w-[463px] text-white font-Roboto font-bold text-[20px] rounded-bl-full rounded-br-full rounded-tr-full rounded-tl-full pt-[14px] pb-[14px]'>+ Create Task</button>
        </section>
       
    </Modal>
  )
}

export default AddCard

