

const InfoField = ({value,title}) => {
    return (
        <div className="flex bg-secondary-50 py-2 px-4 rounded-lg items-center text-secondary-700">
                <p className="font-bold">{title}&nbsp;:&nbsp;</p>
                <span>{value}</span>
            </div>
    );
};

export default InfoField;