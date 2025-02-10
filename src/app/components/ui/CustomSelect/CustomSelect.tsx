import React from "react";
import Select, { SingleValue, MultiValue } from "react-select";

export interface OptionType {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: OptionType[];
  selectedOption: OptionType | null;
  handleChange: (selected: OptionType | null) => void;
  placeholder?: string;
  isMulti?: boolean;
}

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    // padding: "10px", // Increase the inner padding of the select
    borderRadius: "8px", // Optional: Adjust border radius
  }),
  // valueContainer: (provided) => ({
  //   ...provided,
  //   padding: "12px", // Increase padding inside the input field
  // }),
  input: (provided) => ({
    ...provided,
    padding: "7px", // Adjust input padding inside the select
    // border: "1px solid red"
  }),
  singleValue: (provided) => ({
    ...provided,
    padding: "10px", // Add padding to selected option
  }),
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedOption,
  handleChange,
  placeholder = "Select an option...",
  isMulti = false,
}) => {
  const handleSelectChange = (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>
  ) => {
    handleChange(newValue as SingleValue<OptionType>);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleSelectChange}
      options={options}
      placeholder={placeholder}
      isMulti={isMulti}
      className="w-full"
      instanceId="custom-select"
      styles={customStyles} // Apply custom styles 
    />
  );
};

export default CustomSelect;