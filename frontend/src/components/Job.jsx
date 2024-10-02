import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate = useNavigate();

  const jobId = "jdfbjdfhdjhfdh";
  return (
    <div className="p-5 rounded-md shadow-2xlxl bg-white border border-gray-700">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 Days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark></Bookmark>
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
          aspernatur saepe exercitationem non, ab quis ad architecto eaque esse.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold">12 Position</Badge>
        <Badge className="text-[#f83002] font-bold">Part Time</Badge>
        <Badge className="text-[#7209b7] font-bold">20 LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save for later</Button>
      </div>
    </div>
  );
}

export default Job;
