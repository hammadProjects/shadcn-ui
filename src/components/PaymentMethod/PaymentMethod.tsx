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
import Image from "next/image";

type paymentMethod = {
  image: string;
  label: string;
};

const paymentMethods: paymentMethod[] = [
  { image: "/bank-card-line.png", label: "Card" },
  { image: "/paypal-fill.png", label: "Paypal" },
  { image: "/apple-fill.png", label: "Apple" },
];

const PaymentMethod = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-3">
          {paymentMethods.map((method, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-[30%] h-20 flex flex-col border-2 border-transparent hover:border-2 hover:border-black"
            >
              <span>
                {
                  <Image
                    src={method.image}
                    alt={method.label}
                    width={20}
                    height={20}
                  />
                }
              </span>{" "}
              {method.label}
            </Button>
          ))}
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="First Last"
            className="mt-2"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input type="text" id="cardNumber" className="mt-2" />
        </div>
        <div className="flex gap-3 my-4">
          <div className="">
            <Label htmlFor="expires">Expires</Label>
            <Input type="number" id="expires" placeholder="Month" className="mt-2" />
          </div>
          <div className="">
            <Label htmlFor="year">Year</Label>
            <Input type="number" id="year" placeholder="Year" className="mt-2" />
          </div>
          <div className="">
            <Label htmlFor="cvc">CVC</Label>
            <Input type="text" id="cvc" placeholder="CVC" className="mt-2" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentMethod;
