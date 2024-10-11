import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, MoreHorizontalIcon } from "lucide-react";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"></AvatarImage>
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>02-10-2024</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontalIcon></MoreHorizontalIcon>
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="flex items-center gap-2 cursor-pointer w-fit">
                  <Edit2 className="w-4 " />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
