import React from 'react'
import CartaTask from "./CartaTask";
import GuionAll from "./GuionAll";
import GuionDoing from "./GuionDoing";
import GuionDone from "./GuionDone";
import NewColumn from "./NewColumn";
import { useList } from "../../../../hooks/useList";

 const ListCategory = () => {
    const {listss}=useList();

  return (
  
      
        <section className='xl:flex xl:flex-row xl:gap-[24px]'> 

        {listss&&listss.map((list:any)=>{
            return (
                <section key={list.id}>
                <GuionAll cards={list.cards} color={list.title.color} title={list.title.title} />
                  
                 
                  <article className="xl:flex xl:flex-col xl:gap-[25px]">
                  
                       <CartaTask 
                        keyy={list.cards}/>
                  </article>
                 
                  </section>
            )
        })}
       </section>
     

          
    
  )
}
export default ListCategory;