import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobDescription() {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold">12 Position</Badge>
            <Badge className="text-[#f83002] font-bold">Part Time</Badge>
            <Badge className="text-[#7209b7] font-bold">20 LPA</Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ab] "
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-grey-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:
          <span className="font-normal pl-4 text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:
          <span className="font-normal pl-4 text-gray-800">Mumbai</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:
          <span className="font-normal pl-4 text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            quia.
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:
          <span className="font-normal pl-4 text-gray-800">2 years</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:<span className="font-normal pl-4 text-gray-800">12LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:
          <span className="font-normal pl-4 text-gray-800">4</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:
          <span className="font-normal pl-4 text-gray-800">02-10-2024</span>
        </h1>
      </div>
    </div>
  );
}

export default JobDescription;
