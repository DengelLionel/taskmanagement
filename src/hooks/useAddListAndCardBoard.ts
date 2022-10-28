import { useContext, useEffect, useState } from "react"
import { ListCardBoardContext } from "../context/ListsCardsBoards"
import { listSub } from "../Datauser/substasks";
export const useAddListAndCardBoard=()=>{
    

    const {setOpenAddList,setValorNewSubTask,valorNewSubTask,booleanSubTask,valueDelete}=useContext(ListCardBoardContext);
    
    
    console.log("list use ",listSub)
    const [listSubstask,setListSubstask]=useState<Array<any>>([]);
 
   
     
  
    const saveData=()=>{
        localStorage.setItem("listas",JSON.stringify(listSub))
    }

    const OpenAddList=()=>{
        setOpenAddList(true)
    }
    const CloseAddList=()=>{
        setOpenAddList(false)
    }
    const submitDataCard=()=>{
    
    }
    
   
    
    const mountSubstask=()=>{
                
            listSub.push({id:listSub.length+1})
                if(valorNewSubTask===false){
                    setValorNewSubTask(true)
                }
                else if(valorNewSubTask===true){
                    setValorNewSubTask(false)
                }   
    }
    
    const DataDelete=()=>{
    const deletee=listSub.indexOf(valueDelete);
        return listSub.splice(deletee,1);
    }    
            
    
    useEffect(()=>{
 
 
    },[booleanSubTask,listSub,valueDelete])

    return {OpenAddList,CloseAddList,listSub,mountSubstask,DataDelete}

}