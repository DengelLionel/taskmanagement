import AllBoards from "./AllBoards";
const Menu=()=>{
return(
    <section className="xl:h-[700px] xl:w-[300px] xl:bg-primaryBlack">
        <p className="xl:font-bold xl:font-Roboto xl:text-white xl:text-2xl xl:pt-[30px] xl:pl-[20px] xl:pb-[37px]">DengelTask</p>
        <AllBoards/>
    </section>
)
}
export default Menu;