import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const TeamMembers = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collobrate.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div>
              <Image src="/men-line.png" alt="name" width={20} height={20} />
            </div>
            <div>
              <h3 className="text-[14px] font-medium">Sofia Davis</h3>
              <p className="text-[14px] text-gray-600">m@example.com</p>
            </div>
          </div>
          <div>
            <Select defaultValue="owner">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <div>
              <Image src="/men-line.png" alt="name" width={20} height={20} />
            </div>
            <div>
              <h3 className="text-[14px] font-medium">Sofia Davis</h3>
              <p className="text-[14px] text-gray-600">m@example.com</p>
            </div>
          </div>
          <div>
            <Select defaultValue="owner">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMembers;
