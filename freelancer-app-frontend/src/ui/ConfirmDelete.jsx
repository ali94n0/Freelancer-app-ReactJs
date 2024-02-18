import Loader from "./Loader";


function ConfirmDelete({resourceName,onClose,onConfirm,disabled}) {
    return (
        <div className="flex flex-col p-2">
            <h2 className="text-secondary-600 text-base">ایا از حذف {resourceName} مطمعن هستید؟</h2>
            {disabled ? <Loader width={50} height={50}/> : <div className="flex flex-row justify-between mt-5 p-2 gap-x-8 ">
            <button disabled={disabled} onClick={onClose} className="btn btn--primary flex-1">لغو</button>
            <button disabled={disabled} onClick={onConfirm} className="btn btn--danger flex-1">تایید</button>
            </div>}
        </div>
    );
}

export default ConfirmDelete;