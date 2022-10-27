import ReactDOM from "react-dom";

interface modal{
children:any,
CloseAddList:any
}
const Modal = ({children,CloseAddList}:modal) => {
  return ReactDOM.createPortal(
     <div className={`xl:fixed xl:top-0 xl:overflow-y-hidden  xl:bg-negrotransparente xl:z-[90] xl:w-full xl:h-full xl:flex xl:justify-center xl:items-center xl:transition-all xl:duration-1000`}>
    <div className="xl:fixed xl:z-[80] xl:bg-primaryBlack  xl:rounded-tr-2xl xl:rounded-br-2xl xl:rounded-tl-2xl xl:rounded-bl-2xl xl:w-[662px] xl:h-auto xl:pt-[24px] xl:pb-[24px] xl:pl-[57px] xl:pr-[57px] xl:flex xl:justify-center xl:items-center xl:transition-all xl:duration-1000">
<div>
<button onClick={CloseAddList} className="relative left-[105%] ">
      <svg className='fill-current text-bordeInput hover:text-white' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z" fill="text-borderInput hover:text-white"/>
</svg>

    </button>
    <div  >
    {children}
    </div>

</div>
</div>
  </div>,document.querySelector("#modal"))
}

export default Modal;