import flatpickr from "flatpickr";


export interface FlatpickrProps {
    onChange: (selectedDates: Date[], dateStr: string, instance: flatpickr.Instance) => void;  
    defaultValue?: Date | Date[];
    options?: object;
}