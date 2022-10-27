import Header from "./header/Header";
import Menu from "./main/menu/Menu";
import Index from "./main/homeTasks/Index";
import AddCard from "./secciones/AddCard";
import NewColumn from "./main/homeTasks/NewColumn";
import ReactDOM from "react-dom";
import { useContext } from "react";
import {ListCardBoardContext} from "../../context/ListsCardsBoards";
const MainDesktop=()=>{
    const {openAddList}=useContext(ListCardBoardContext)
    return(
    <section className={` xl:bg-secundaryBlack xl:w-full xl:h-full cursor-default m-0 ${openAddList===true&&'xl:overflow-hidden'}`}>
        <Header/>
        <section className={`xl:grid xl:grid-cols-[auto,auto] ${openAddList===true&&'xl:overflow-hidden'}`}>
        <Menu/>
        <Index/>
       
        </section>
        <NewColumn/>
        {openAddList===true&&<AddCard/>}
    </section>
    )
}
export default MainDesktop;