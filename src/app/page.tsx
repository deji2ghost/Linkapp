"use client";

import Image from "next/image";
import Header from "./components/layout/Header/Header";
import CustomButton from "./components/ui/Button/customButton";
import Book from "../../public/book.svg";
import CustomLabel from "./components/ui/CustomLabel/CustomLabel";
import CustomSelect, {
  OptionType,
} from "./components/ui/CustomSelect/CustomSelect";
import { options } from "@/lib/data/OptionsData";
import { useState } from "react";
import Input from "./components/ui/Input/input";
import { useFormContext } from "@/context/formContext";

export default function Home() {
  // const [formLink, setFormLink] = useState<formData[]>([]);
  const { formLink, setFormLink } = useFormContext()

  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);

  const handleNewForm = () => {
    setFormLink([...formLink, { LinkName: selectedOption.value, LinkPath: "" }]);
  };

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const { value, name } = e.target;
    console.log(value, name);
    // const newForm = { ...formLink, [name]: value}
    // setFormLink(newForm)
  };

  const handleSelect = (selected: OptionType | null) => {
    if (!selected) {
      console.log("Invalid input: Please select a transaction status.");
      return;
    }
    setSelectedOption(selected);
    console.log(selectedOption);
  };
  return (
    <div className="min-h-screen bg-White">
      <div className="border-b border-Borders p-6 flex flex-col gap-10">
        <Header
          content="Customize your links"
          paragraph="Add/edit/remove links below and then share all your profiles with the world!"
        />
        <div className="flex flex-col gap-6">
          <CustomButton
            onClick={handleNewForm}
            variant="alternate"
            className="w-[295px]"
          >
            + Add new link
          </CustomButton>
          { formLink.length > 0 ?
          <>
          {
            formLink.map((item, index)=> {
              return(
                <div key={index} className="bg-lightGrey rounded-xl p-5 flex flex-col gap-[12px]">
                <div className="flex justify-between">
                  <h1 className="font-[700] text-[16px] text-Grey">Link #{index + 1}</h1>
                  <h2>Remove</h2>
                </div>
                <div>
                  <CustomLabel text="Platform" />
                  <CustomSelect
                    selectedOption={selectedOption ? selectedOption : null}
                    handleChange={handleSelect}
                    options={options}
                  />
                </div>
                <div>
                  <CustomLabel text="Link" />
                  <Input type="text" handleChange={handleChange} name="LinkPath" placeholder={""} value={item.LinkPath} className="w-[255px] border border-Borders" />
                </div>
              </div>
              )
            })
          }</>
           : 
           <div className="px-5 py-[46.5px] flex flex-col gap-6 items-center bg-lightGrey p-5 rounded-xl">
              <Image alt="book" src={Book}/>
              <h1 className="text-[24px] font-[700] text-DarkGrey text-center">Let’s get you started</h1>
              <p className="text-[16px] font-[400] text-Grey text-center">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone</p>
            </div>
          }
        </div>
      </div>
      <div className="p-4">
        <CustomButton className="w-[311px]">Save</CustomButton>
      </div>
    </div>
  );
}
