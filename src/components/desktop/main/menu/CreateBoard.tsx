const CreateBoard=()=>{
    return(
        <button className="xl:font-Roboto xl:font-bold xl:text-base xl:text-textCreateNew xl:w-[auto] xl:pl-[10px] xl:h-[56px]  xl:flex xl:flex-grow xl:gap-[20px] xl:pt-[15px]">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6 4V18H4.80002V20H21.6C22.92 20 24 19.1 24 18V4H21.6Z" fill="#423AC4"/>
<path d="M16.8 0H2.4C1.08 0 0 0.9 0 2V14C0 15.1 1.08 16 2.4 16H16.8C18.12 16 19.2 15.1 19.2 14V2C19.2 0.9 18.12 0 16.8 0ZM8.4 14H2.4V9H8.4V14ZM16.8 14H10.8V9H16.8V14ZM16.8 7H2.4V2H16.8V7Z" fill="#423AC4"/>
</svg>
        <span>+ Create New Board</span>
        </button>
    )
}
export default CreateBoard;