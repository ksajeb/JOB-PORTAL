import { Badge } from "./ui/badge";

export default function LatestJobCards() {
  return (
    <div className="p-5 rounded-md shadow-2xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          corporis?
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold">12 Position</Badge>
        <Badge className="text-[#f83002] font-bold">Part Time</Badge>
        <Badge className="text-[#7209b7] font-bold">20 LPA</Badge>
      </div>
    </div>
  );
}
