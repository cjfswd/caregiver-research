import { ChangeEvent } from "react";
import { Input } from "../ui/input";

export const CurrencyInput = ({ maxLength, formattedValue, setFormattedValue }: { maxLength: number, formattedValue: string | undefined, setFormattedValue: (value:string) => void }) => {

    const formatCurrency = (raw: string) => {
        // Remove all non-numeric characters
        const filteredValue = raw.replace(/[^0-9]/g, '');
        let withComma = filteredValue
        if (filteredValue.length > 1) {
            withComma = filteredValue.slice(0, -1) + ',' + filteredValue.slice(-1)
        }
        if (filteredValue.length > 2) {
            withComma = filteredValue.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + filteredValue.slice(-2)
        }

        setFormattedValue(withComma);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        formatCurrency(e.target.value);
    };

    return (
        <Input placeholder='digite aqui o valor em reais' value={formattedValue} onChange={handleChange} maxLength={maxLength} />
    )
}
