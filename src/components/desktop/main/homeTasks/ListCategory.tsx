
import CartaTask from "./CartaTask";
import GuionAll from "./GuionAll";

import NewColumn from "./NewColumn";
import { useList } from "../../../../hooks/useList";
 const ListCategory = () => {
    const {lists}=useList();

  return (
    <div>
        {/* /////////////// */}
        <section className='xl:flex xl:flex-row xl:gap-[24px]'> 

        {lists&&lists.map((list:any,index:number)=>{
            return (
                <section key={index} >
                <GuionAll index={index} cards={list.cards} color={list.title.color} title={list.title.title} />
                  
                 
                  <article className="xl:flex xl:flex-col xl:gap-[25px]">
                  
                       <CartaTask
                        keyy={list.cards}/>
                  </article>
                 
                  </section>
            )
        })}
       </section>
          {/* //////// */}

          <NewColumn/>
    </div>
  )
}
export default ListCategory;