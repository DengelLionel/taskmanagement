import { createContext } from "react"
import { useState } from "react"
import {listSub} from "../Datauser/substasks";
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
  title:string|undefined,
  setTitle:(data6:string|undefined)=>void,
  description:string|undefined,
  setDescription:(data7:string|undefined)=>void,
  substasks:any|undefined,
  setSubstasks:(data8:any|undefined)=>void,
  updateCard:boolean|undefined,
  setUpdateCard:(data9:boolean|undefined)=>void,
  dataInputSubTask:any|undefined,
  setDataInputSubTask:(data10:any|undefined)=>void,
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
  setList:()=>{},
  title:"",
  setTitle:()=>{},
  description:"",
  setDescription:()=>{},
  substasks:null,
  setSubstasks:()=>{},
  updateCard:false,
  setUpdateCard:()=>{},
  dataInputSubTask:{},
  setDataInputSubTask:()=>{},
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
    const [title,setTitle]=useState<string|undefined>();
    const [description,setDescription]=useState<string|undefined>();
    const [substasks,setSubstasks]=useState<any|undefined>();
    const [updateCard,setUpdateCard]=useState<boolean|undefined>(false);
    const [dataInputSubTask,setDataInputSubTask]=useState<any|undefined>({});
    
    const data={
        openAddList,
        setOpenAddList,valorNewSubTask,setValorNewSubTask,booleanSubTask,setBooleanSubTask,
        valueDelete,setValueDelete,list,setList,title,setTitle,description,setDescription,substasks,setSubstasks,updateCard,setUpdateCard,dataInputSubTask,setDataInputSubTask
    }
  return (
    <ListCardBoardContext.Provider value={data}>
        {children}
    </ListCardBoardContext.Provider>
  )
}

