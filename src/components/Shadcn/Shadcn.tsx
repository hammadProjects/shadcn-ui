import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle, Star } from "lucide-react";

const Shadcn = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>shadcn/ui</CardTitle>
        <CardDescription>
          Beautifully designed components built with Radix UI and Tailwind CSS
        </CardDescription>
      </CardHeader>
      <CardFooter className="space-x-3 text-gray-600 text-[14px]">
        <span className="flex items-center">
          <Circle className="w-3 text-blue-400" />
          TypeScript
        </span>
        <span className="flex items-center">
          <Star className="w-3" />
          20k
        </span>
        <span>Updated April 2023</span>
      </CardFooter>
    </Card>
  );
};

export default Shadcn;
