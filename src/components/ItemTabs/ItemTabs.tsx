import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ItemCard, { Product } from "../ItemCard/ItemCard";

const PizzaItem: Product[] = [
  {
    id: "1",
    name: "Margrita Pizza",
    description: "This is very tasty pizza. ",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "2",
    name: "Margrita Pizza",
    description: "This is very tasty pizza. ",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "3",
    name: "Margrita Pizza",
    description: "This is very tasty pizza. ",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "4",
    name: "Margrita Pizza",
    description: "This is very tasty pizza. ",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "5",
    name: "Margrita Pizza",
    description: "This is very tasty pizza. ",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "6",
    name: "Margrita Pizza",
    description: "This is very tasty pizza. ",
    image: "/pizza-main.png",
    price: 500,
  },
];

const ItemTabs = () => {
  return (
    <section>
      <div className="w-[60%] mx-auto py-10">
        <Tabs defaultValue="pizza">
          <TabsList>
            <TabsTrigger className="bg-white text-[16px]" value="pizza">
              Pizza
            </TabsTrigger>
            <TabsTrigger className="bg-white text-[16px]" value="donuts">
              Donuts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pizza" className="mt-3">
            {/* Pizza */}
            <div className="grid grid-cols-4 gap-5">
              {PizzaItem.map((product) => (
                <div key={product.id} className="">
                  <ItemCard product={product} />
                </div>
              ))}
            </div>
            {/* Donuts */}
          </TabsContent>
          <TabsContent value="donuts">Donut section</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ItemTabs;
