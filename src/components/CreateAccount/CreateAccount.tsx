import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const CreateAccount = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <Button variant="outline" className="w-[45%]">
            <Image src="/github-fill.png" alt="github" width={20} height={20} />{" "}
            Github
          </Button>
          <Button variant="outline" className="w-[45%]">
            <Image src="/google-fill.png" alt="github" width={20} height={20} />{" "}
            Google
          </Button>
        </div>
        <div className="relative">
          <Separator className="mt-6" />
          <span className="text-[13px] uppercase absolute top-[-10px] right-[28%] text-gray-600 bg-white px-2">
            or continue with
          </span>
        </div>
        <div className="mt-5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="m@example.com"
            className="mt-2"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" className="mt-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Account</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateAccount;
