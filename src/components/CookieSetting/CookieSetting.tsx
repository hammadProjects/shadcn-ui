import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

type prefrence = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

const preferences: prefrence[] = [
  {
    id: "strictlyNecessary",
    label: "Strictly Necessary",
    description:
      "These cookies are essential in order to use the website and use its features.",
    enabled: true,
  },
  {
    id: "functional",
    label: "Functional Cookies",
    description:
      "These cookies allow the website to provide personalized functionality.",
    enabled: false,
  },
  {
    id: "performance",
    label: "Performance Cookies",
    description:
      "These cookies help to improve the performance of the website.",
    enabled: false,
  },
];

const CookieSetting = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {preferences.map((pref) => (
          <div key={pref.id}>
            <div>
              <h4 className="font-medium text-[14px]">{pref.label}</h4>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-gray-600">{pref.description}</p>
              <Switch />
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant={"secondary"} className="w-full">
          Svae preferences
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CookieSetting;
