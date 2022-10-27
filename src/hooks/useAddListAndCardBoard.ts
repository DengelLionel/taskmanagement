import { useContext, useEffect, useState } from "react"
import { ListCardBoardContext } from "../context/ListsCardsBoards"
import { listSub } from "../Datauser/substasks";
export const useAddListAndCardBoard=()=>{
    

    const {setOpenAddList,setValorNewSubTask,valorNewSubTask,booleanSubTask,valueDelete,setValueDelete}=useContext(ListCardBoardContext);
    const [title,setTitle]=useState<string>();
    const [description,setDescription]=useState<string>();
    const [substasks,setSubstasks]=useState<Array<string>>();
    
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
                
            listSub.push({id:listSub.length+1,title:null})
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

    return {OpenAddList,CloseAddList,setTitle,setDescription,setSubstasks,listSub,mountSubstask,DataDelete}

}