
import {toFarsiNumber} from "../utils/CostomizePrice"

const colorStyle={
    "primary":"text-primary-800 bg-primary-200",
    "yellow":"text-yellow-600 bg-yellow-100",
    "green":"text-green-700 bg-green-200",
    "orange":"text-orange-700 bg-orange-100"
}

function StatBox({label,value,icon,color}) {
    return (
        <div className="grid col-span-1 grid-rows-2 grid-cols-[5rem_1fr] bg-secondary-200 rounded-lg p-2">
              <div className={`row-span-2 flex justify-center items-center text-primary-800 bg-primary-200 rounded-full p-2 m-2 ${colorStyle[color]} `}>
              {icon}
              </div>
              <h5 className="row-span-1 md:text-lg font-bold text-secondary-500 mr-4">{label}</h5>
              <p className="row-span-1 font-bold md:text-lg text-secondary-600 mr-4">{toFarsiNumber(value)}</p>
        </div>
    );
}

export default StatBox;