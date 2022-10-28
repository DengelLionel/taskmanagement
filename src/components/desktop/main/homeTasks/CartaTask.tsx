interface Props{
    keyy:any,

 
}
interface valormap{
    values:any
}
const CartaTask=({keyy }:Props)=>{
/*     const onDragStart=(e:any)=>{
        e.dataTransfer.setData('text/plain',e.target.id);
        e.currentTarget.style.backgroundColor='blue';
    } */
   
   return  keyy?.map((valuess:any)=>{
   
        return(

        
        <button 
                key={valuess.id}
                 className="xl:w-[227px] xl:h-[130px] xl:bg-primaryBlack xl:rounded-bl-2xl xl:rounded-br-2xl xl:rounded-tr-2xl xl:rounded-tl-2xl xl:p-[8px]">
                      <span className="xl:font-bold xl:font-Roboto xl:text-[14px] xl:text-white "> {valuess.title} </span><br />
                        
                    <span className="xl:text-textSecundary xl:text-[14px] xl:font-bold ">{valuess.substasks?.map((e:any)=> e.map((d:any)=>d.mount))}</span>
                    
                    
                </button>
                )
})
        
       
}
export default CartaTask;