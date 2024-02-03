

function ConfirmDelete({resourceName,onClose,onConfirm}) {
    return (
        <div className="flex flex-col p-2">
            <h2 className="text-secondary-600 text-base">ایا از حذف {resourceName} مطمعن هستید؟</h2>
            <div className="flex flex-row justify-between mt-5 p-2 gap-x-8 ">
                <button onClick={onClose} className="btn btn--primary flex-1">لغو</button>
                <button onClick={onConfirm} className="btn btn--danger flex-1">تایید</button>
            </div>
        </div>
    );
}

export default ConfirmDelete;