import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ShareDocument = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Share this document</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="link" />
            <Input
              type="url"
              id="link"
              placeholder="https://example.com/link/"
              className="placeholder:text-black"
            />
          </div>
          <Button variant={"secondary"}>Copy Link</Button>
        </div>
        <Separator className="my-4" />
        <h4 className="text-[14px] font-bold">People with access</h4>
        <div className="mt-3 space-y-3">
          <Member />
          <Member />
          <Member />
        </div>
      </CardContent>
    </Card>
  );
};

export default ShareDocument;

const Member = () => {
  return (
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
  );
};
