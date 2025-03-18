import {
  ArrowLeftIcon,
  CalendarIcon,
  ImageIcon,
  MessageSquareIcon,
  PaperclipIcon,
  SearchIcon,
  TagIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

export const CreatePost = () => {
  // Available tags data
  const availableTags = [
    { id: 1, name: "tag 1" },
    { id: 2, name: "tag 2" },
    { id: 3, name: "tag 3" },
    { id: 4, name: "tag 4" },
    { id: 5, name: "tag 5" },
    { id: 6, name: "tag 6" },
    { id: 7, name: "tag 7" },
    { id: 8, name: "tag 8" },
    { id: 9, name: "tag 9" },
  ];

  // Selected tags
  const selectedTags = [
    { id: 1, name: "tag 1" },
    { id: 6, name: "tag 6" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1024px] relative">
        {/* Header */}
        <div className="absolute w-full h-[73px] top-0 left-0">
          <div className="w-full h-full bg-[#ecbc76] opacity-60" />

          <div className="absolute top-[18px] left-[138px] font-['Poppins',Helvetica] font-semibold text-[#c6553b] text-[32px]">
            SafeSpace
          </div>

          <img
            className="absolute w-[75px] h-[74px] top-[11px] left-[77px] object-cover"
            alt="SafeSpace logo"
            src="https://c.animaapp.com/m8e6bl1hIt67xP/img/untitled-design--1--removebg-preview-1.png"
          />

          <div className="absolute w-[608px] h-[29px] top-8 left-[365px] bg-[#fef7ff] rounded-[18px] flex items-center px-4">
            <SearchIcon className="w-5 h-5 text-[#a0a1b0]" />
            <span className="ml-4 font-body-body-1-regular-16 text-[#a0a1b0]">
              SearchIcon
            </span>
          </div>

          <div className="absolute flex items-center top-[33px] left-[1057px]">
            <CalendarIcon className="w-6 h-6" />
            <span className="ml-2 font-['Inter',Helvetica] font-normal text-graysblack text-base">
              Appointments
            </span>
          </div>

          <div className="absolute flex items-center top-[35px] left-[1273px]">
            <MessageSquareIcon className="w-6 h-6" />
            <span className="ml-2 font-['Inter',Helvetica] font-normal text-black text-base">
              Chat
            </span>
          </div>

          <div className="absolute flex items-center top-8 left-[1408px]">
            <UserIcon className="w-6 h-6" />
            <span className="ml-2 font-['Inter',Helvetica] font-normal text-black text-base">
              Profile
            </span>
          </div>
        </div>

        <div className="absolute w-full h-[926px] top-[107px] left-0">
          {/* Main content */}
          <div className="absolute w-[1482px] h-[926px] top-0 left-[25px]">
            <div className="absolute w-[235px] h-[51px] top-0 left-72 font-['Inter',Helvetica] font-bold text-black text-[32px] leading-[48px]">
              Create Post
            </div>

            <Separator className="absolute w-[1440px] h-1 top-[68px] left-0" />

            {/* Title input */}
            <Card className="absolute w-[608px] h-[54px] top-[110px] left-72 rounded-[18px] border border-solid border-[#e48700]">
              <CardContent className="p-0">
                <Input
                  className="h-full border-none font-['Inter',Helvetica] font-light text-black text-xl leading-[30px] pl-8"
                  placeholder="Title"
                />
              </CardContent>
            </Card>

            {/* Post content area */}
            <Card className="absolute w-[1045px] h-[523px] top-[187px] left-72 rounded-[30px] border border-solid border-[#e48700]">
              <CardContent className="p-4 h-full">
                <Textarea
                  className="w-full h-full resize-none border-none font-['Inter',Helvetica] font-light text-black text-xl leading-[30px]"
                  placeholder="How are you feeling....."
                />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ImageIcon className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <PaperclipIcon className="h-6 w-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Added tags section */}
            <Card className="absolute w-[843px] h-[114px] top-[772px] left-72 rounded-[30px] border border-solid border-[#e48700]">
              <CardContent className="p-4">
                <div className="font-['Inter',Helvetica] font-normal text-black text-xl mb-4">
                  Added Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag.id}
                      className="bg-[#ecbc76] opacity-50 text-black rounded-[18px] px-6 py-1 font-['Inter',Helvetica] font-light text-xl"
                    >
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Post button */}
            <div className="absolute right-0 bottom-[83px]">
              <Button className="w-[165px] h-[66px] bg-[#ecbc76] hover:bg-[#ecbc76]/90 rounded-[45px] font-['Inter',Helvetica] font-normal text-black text-2xl">
                Post
              </Button>
            </div>
          </div>

          {/* Back button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute w-12 h-12 top-1 left-[35px]"
          >
            <ArrowLeftIcon className="w-12 h-12" />
          </Button>

          {/* Tags section */}
          <div className="absolute w-72 h-[91px] top-[89px] left-0 flex flex-col items-center">
            <TagIcon className="w-[43px] h-12" />
            <div className="w-72 font-['Inter',Helvetica] font-semibold text-black text-[32px] text-center leading-[48px]">
              Add Tags
            </div>
          </div>

          {/* Available tags */}
          <div className="absolute top-[205px] left-[26px] flex flex-wrap w-[250px] gap-2">
            {availableTags.map((tag) => (
              <Badge
                key={tag.id}
                className="bg-[#ecbc76] opacity-50 text-black rounded-[18px] px-4 py-1 font-['Inter',Helvetica] font-light text-xl"
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
