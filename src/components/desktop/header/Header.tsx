import ButtonAdd from "./ButtonAdd";
import { useAddListAndCardBoard } from "../../../hooks/useAddListAndCardBoard";
const Header=()=>{
    const {OpenAddList}=useAddListAndCardBoard();
    return(
        <header className="xl:w-[1050px] xl:h-[80px] xl:bg-primaryBlack xl:float-right xl:border-l-2 xl:border-linea xl:flex xl:flex-grow xl:items-center xl:m-0">
            <p className="text-white text-2xl xl:font-bold xl:font-Roboto xl:absolute xl:left-[25%] ">Plataform Launch</p>
            <ButtonAdd clickOpen={OpenAddList} />
        </header>
    )
}
export default Header;