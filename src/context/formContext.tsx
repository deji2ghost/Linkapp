"use client"

import { formData, profileData } from "@/lib/types";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface FormProps {
  formLink: formData[];
  setFormLink: React.Dispatch<React.SetStateAction<formData[]>>;
  profileDetails: profileData;
  setProfileDetails: React.Dispatch<React.SetStateAction<profileData>>;
}

const FormContext = createContext<FormProps | undefined>(undefined);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [formLink, setFormLink] = useState<formData[]>([]);

  useEffect(()=> {
    const storedLinks = localStorage.getItem("links")
    if(storedLinks){
      const saveLink = JSON.parse(storedLinks)
      console.log(saveLink)
      setFormLink(saveLink)
    }
  }, [])
  
  const [profileDetails, setProfileDetails] = useState<profileData>({
    image: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(()=> {
    const profileDetails = localStorage.getItem("profile")
    if(profileDetails){
      const saveLink = JSON.parse(profileDetails)
      setProfileDetails(saveLink)
    }
  }, [])

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
