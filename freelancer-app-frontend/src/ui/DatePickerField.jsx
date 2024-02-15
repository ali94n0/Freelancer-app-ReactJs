
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function DatePickerField({date,handleChange,label}) {
    
    return (
        <div className="mt-2">
            <label className="block mb-1 p-1 text-secondary-700">{label}</label>
            <DatePicker 
                value={date}
                onChange={handleChange}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                inputClass="textField__input p-2 block"
            />
            
        </div>
    );
}

export default DatePickerField;