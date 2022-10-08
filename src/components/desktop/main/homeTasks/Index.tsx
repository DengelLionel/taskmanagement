import CartaTask from "./CartaTask";
import GuionAll from "./GuionAll";
import GuionDoing from "./GuionDoing";
import GuionDone from "./GuionDone";
import NewColumn from "./NewColumn";
const Index=()=>{
    const onDragOver=(e:any)=>{
        e.preventDefaul();
    }
    const onDrop=(e:any)=>{
        const id=e.dataTransfer.getData('Text');
        const draggableElement=document.getElementById(id);
        const dropZone=e.target;
        dropZone.appendChild(draggableElement);
        e.dataTransfer.clearData();
    }
    return(
        <section className="lg:p-[15px] xl:mt-[90px] xl:w-[1040px] xl:h-[auto]"> 
        <article className="xl:grid xl:grid-cols-[auto,auto,auto] xl:w-[750px]">
            <GuionAll/><GuionDoing/><GuionDone/>
            </article>
        <section className="xl:grid xl:grid-cols-[auto,auto,auto,auto] xl:h-[auto] xl:w-[1000px]">
            
        
        <article className="xl:flex xl:flex-col xl:gap-[25px]">
        
        <CartaTask/>
        <CartaTask/>
        <CartaTask/>
        </article>

        <article 
            onDragOver={(e)=>{onDragOver(e)}}
            onDrop={(e)=>{onDrop(e)}}
         className="xl:flex xl:flex-col xl:gap-[25px]">
        
        <CartaTask/>
        <CartaTask/>
        </article>   

         <article className="xl:flex xl:flex-col xl:gap-[25px]">
         
        <CartaTask/>
        <CartaTask/>
        <CartaTask/>
        
        </article>    
        <NewColumn/>
        </section>
        
          
        </section>
    )
}
export default Index;