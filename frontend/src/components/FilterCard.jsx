import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Full Stack Developer",
      "App Developer",
      "iOS Developer",
      "Backend Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-40k",
      "42-1lac",
      "1 lac-2 lac",
      "2 lac to 5 lac",
      "5 lac - 10 lac",
    ],
  },
];
function FilterCard() {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg ">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={(data, index)}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((Item, index) => {
              return (
                <div
                  key={Item || index}
                  className="flex items-center space-y-2 space-x-2"
                >
                  <RadioGroupItem value={Item}></RadioGroupItem>
                  <Label>{Item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
