import {useEffect, useMemo, useState} from "react";
import countryList from 'react-select-country-list';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Label} from "@/components/ui/label";

const CountrySelectField = ({label, name, error, required = true, control}: CountrySelectProps) => {

    return (
        <div>
        </div>
    )
}
export default CountrySelectField
