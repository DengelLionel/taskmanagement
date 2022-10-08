import Boards from "./Boards"
import ButtonsChangingTheme from "./ButtonsChangingTheme"
import CreateBoard from "./CreateBoard"
const AllBoards=()=>{
return(
    <article>
        <p className="xl:text-base xl:font-RobotoMono xl:font-bold xl:text-textPrimary xl:pl-[15px] xl:pb-[20px]">ALL BOARDS (3)</p>
        <Boards/>
        <CreateBoard/>
        
        <ButtonsChangingTheme/>
        
    </article>
    
    
)
}
export default AllBoards