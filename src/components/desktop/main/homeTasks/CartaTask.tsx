const CartaTask=()=>{
    const onDragStart=(e:any)=>{
        e.dataTransfer.setData('text/plain',e.target.id);
        e.currentTarget.style.backgroundColor='blue';
    }
   
    return(
        <button 
        draggable="true"
        onDragStart={(e)=>{onDragStart(e)}}
         className="xl:w-[227px] xl:h-[130px] xl:bg-primaryBlack xl:rounded-bl-2xl xl:rounded-br-2xl xl:rounded-tr-2xl xl:rounded-tl-2xl xl:p-[8px]">
              <span className="xl:font-bold xl:font-Roboto xl:text-[14px] xl:text-white ">Build UI onboarding flow UI onboarding flow UI onboarding flow</span><br />
           
            <span className="xl:text-textSecundary xl:text-[14px] xl:font-bold ">0 of 3 substacks</span>
            
            
        </button>
    )
}
export default CartaTask;