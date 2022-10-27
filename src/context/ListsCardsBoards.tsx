import { createContext } from "react"
import { useState } from "react"
interface contextMain{
  openAddList:boolean|undefined,
  setOpenAddList:(data:boolean|undefined)=>void,
  valorNewSubTask:boolean|undefined,
  setValorNewSubTask:(data2:boolean|undefined)=>void,
  booleanSubTask:boolean|undefined,
  setBooleanSubTask:(data3:boolean|undefined)=>void,
  valueDelete:any|undefined,
  setValueDelete:(data4:any|undefined)=>void,
  list:any|undefined,
  setList:(data5:any|undefined)=>void,
}
export const ListCardBoardContext=createContext<contextMain>({
  openAddList:false,
  setOpenAddList:()=>{},
  valorNewSubTask:false,
  setValorNewSubTask:()=>{},
  booleanSubTask:false,
  setBooleanSubTask:()=>{},
  valueDelete:null,
  setValueDelete:()=>{},
  list:null,
  setList:()=>{}
});
interface context{
    children:any
}
export const ListsCardsBoards = ({children}:context) => {
    const [openAddList,setOpenAddList]=useState<boolean|undefined>(false);
    const [valorNewSubTask,setValorNewSubTask]=useState<boolean|undefined>(false);
    const [booleanSubTask,setBooleanSubTask]=useState<boolean|undefined>(false);
    const [valueDelete,setValueDelete]=useState<any|undefined>();
    const [list,setList]=useState <any|undefined>([]);
    const data={
        openAddList,
        setOpenAddList,valorNewSubTask,setValorNewSubTask,booleanSubTask,setBooleanSubTask,
        valueDelete,setValueDelete,list,setList
    }
  return (
    <ListCardBoardContext.Provider value={data}>
        {children}
    </ListCardBoardContext.Provider>
  )
}

