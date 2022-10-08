import Header from "./header/Header";
import Menu from "./main/menu/Menu";
import Index from "./main/homeTasks/Index";

const MainDesktop=()=>{
    return(
    <section className="xl:bg-secundaryBlack xl:w-full xl:h-full cursor-default m-0">
        <Header/>
        <section className="xl:grid xl:grid-cols-[auto,auto]">
        <Menu/>
        <Index/>
       
        </section>
       
        
    </section>
    )
}
export default MainDesktop;