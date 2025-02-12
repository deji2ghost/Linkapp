"use client";
import React from "react";
import Header from "../components/layout/Header/Header";
import Input from "../components/ui/Input/input";
import CustomButton from "../components/ui/Button/customButton";
import CustomLabel from "../components/ui/CustomLabel/CustomLabel";
import { useFormContext } from "@/context/formContext";

const Profile = () => {
  const { profileDetails, setProfileDetails } = useFormContext()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfileDetails({ ...profileDetails, image: URL.createObjectURL(file) }); // Create a preview URL
    }
  };

  const handleChange= (e: { target: { value: string; name: string } },) => {
    const { name, value } = e.target
    setProfileDetails({
      ...profileDetails,
      [name]: value
    })
  }

  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profileDetails))
  }

  return (
    <div className="min-h-screen bg-White">
      <div className="border-b border-Borders p-6 flex flex-col gap-10">
        <Header
          content="Profile Details"
          paragraph="Add your details to create a personal touch to your profile"
        />
        <div className="flex flex-col gap-6">
          <div className="bg-lightGrey flex flex-col gap-[12px] rounded-[12px] p-5 h-[333px] w-[295px]">
            <h1>Profile Picture</h1>
            {/* <input type="file" accept="image/*" placeholder="+ Upload Image" onChange={handleImageUpload} /> */}
            <Input
              type="file"
              accept="image/*"
              placeholder="+ Upload Image"
              onChange={handleImageUpload}
            />
            <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
          </div>
          <div className="bg-lightGrey flex flex-col p-5 rounded-[12px] gap-[12px]">
            <div className="flex flex-col gap-1">
              <CustomLabel text="First name"/>
              <Input placeholder="First name" type="text" name="firstName" value={profileDetails.firstName} handleChange={handleChange}/>
            </div>
            <div className="flex flex-col gap-1">
              <CustomLabel text="Last name"/>
              <Input placeholder="Last name" type="text" name="lastName" value={profileDetails.lastName} handleChange={handleChange}/>
            </div>
            <div className="flex flex-col gap-1">
              <CustomLabel text="Email"/>
              <Input placeholder="Email" type="text" name="email" value={profileDetails.email} handleChange={handleChange}/>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <CustomButton onClick={saveProfile} className="w-[311px]">Save</CustomButton>
      </div>
    </div>
  );
};

export default Profile;
