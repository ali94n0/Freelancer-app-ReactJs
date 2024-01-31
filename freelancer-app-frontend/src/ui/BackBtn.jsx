import { HiArrowRight } from "react-icons/hi";

//render moveBack btn
function BackBtn({onBack}) {
    return (
        <button className='btn--back' onClick={onBack}>
               <HiArrowRight className='ml-2' /> 
               <span>بازگشت</span>
            </button>
    );
}

export default BackBtn;