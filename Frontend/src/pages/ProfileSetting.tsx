import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Footer from "./../pages/Footer";
import Navbar from "./Navbar";
import userData from "@/data/userData.json";  // Local mock JSON data

type UserInfoProps = {
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  photoURL: string;
  phoneNumber?: number;
  address?: string;
};

const UserSettings: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfoProps | null>(null);
  const [loading, setLoading] = useState(false);

  // Load user data from JSON on mount
  useEffect(() => {
    setUserInfo(userData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (userInfo) {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Mock Save Successful (JSON data is not really saved)");
      setLoading(false);
    }, 1000);
  };

  if (!userInfo) {
    return <p className="text-center mt-4">Loading user data...</p>;
  }

  return (
    <div className="max-h-screen bg-neutral-50  transition-colors thin-scrollbar overflow-y-auto">
      <Navbar />
      
        <Card className="shadow-lg mt-20 bg-[#fcf1de]">
          <CardHeader>
            <h2 className="text-2xl font-bold text-[#4d3716]" style={{fontFamily : "font5"}} >Profile Settings</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-[#4d3716] ">
              {/* Non-editable fields */}
              {(["firstName", "lastName", "name", "email"] as (keyof UserInfoProps)[]).map((field) => (
                <div key={field}>
                  <Label className="block " style={{fontFamily : "font5"}}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Label>
                  <Input value={userInfo[field]} disabled className="cursor-not-allowed border-1 border-black bg-[#ffffff]" />
                </div>
              ))}

              {/* Editable fields */}
              <div>
                <Label className="block font-medium" style={{fontFamily : "font5"}}>Phone Number</Label>
                <Input
                  type="number"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleChange}
                   className="bg-[#ffffff] border-1 border-black"
                />
              </div>
              <div>
                <Label className="block font-medium" style={{fontFamily : "font5"}} >Address</Label>
                <Input
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  className="bg-[#ffffff] border-1 border-black"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center ">
            <Button onClick={handleSave} className="bg-[#3A2E25] text-white py-2 rounded-xl hover:bg-[#806552]  border-1 border-black" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
     
      <Footer />
    </div>
  );
};

export default UserSettings;
