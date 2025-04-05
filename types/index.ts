import {MouseEventHandler} from 'react';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufactureProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    class: string;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer: string | 'bmw';
    year: number;
    fuel: string;
    model:string;
    drive: string;
}

export interface OptionProps {
    title: string,
    value: string,
}

export interface CustomFilterProps {
    title: string,
    options: OptionProps[];
}