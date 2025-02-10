"use client"

import { formData, profileData } from "@/lib/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface FormProps {
  formLink: formData[];
  setFormLink: React.Dispatch<React.SetStateAction<formData[]>>;
  profileDetails: profileData;
  setProfileDetails: React.Dispatch<React.SetStateAction<profileData>>;
}

const FormContext = createContext<FormProps | undefined>(undefined);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [formLink, setFormLink] = useState<formData[]>([]);
  
  const [profileDetails, setProfileDetails] = useState<profileData>({
    image: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  return(
    <FormContext.Provider value={{ formLink, setFormLink, profileDetails, setProfileDetails }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error("useFormContext must be used within a FormContextProvider");
    }
    return context;
  };
