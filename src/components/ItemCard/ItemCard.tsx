import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type propTypes = { product: Product };

const ItemCard = ({ product }: propTypes) => {
  return (
    <Card className="max-w-[260px] border-none py-3">
      <CardHeader>
        <div>
          <Image
            src={product.image}
            alt="pizza-img"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
      </CardHeader>
      <CardContent className="px-3">
        <h3 className="font-bold text-[18px]">{product.name}</h3>{" "}
        <p className="text-[14px]">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between px-3">
        <p>
          From <span className="font-bold">Rs. {product.price}</span>
        </p>
        <Dialog>
          <DialogTrigger className="py-1 px-2 text-white rounded-2xl bg-orange-400 hover:bg-orange-300 hover:text-amber-600">
            Choose
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
