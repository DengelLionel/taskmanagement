interface button{
    clickOpen:any
}
const ButtonAdd=({clickOpen}:button)=>{
    return(
        <button onClick={clickOpen} className="xl:w-[154px] xl:h-[38px]  xl:font-Roboto xl:bg-buttoncolor xl:font-bold xl:text-base xl:text-white xl:rounded-tl-3xl xl:rounded-bl-3xl xl:rounded-br-3xl xl:rounded-tr-3xl xl:absolute xl:left-[80%]">
            + Add New Task
        </button>
    )
}
export default ButtonAdd;