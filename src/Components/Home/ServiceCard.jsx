import React from "react";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dbConnect } from "@/lib/dbConnect";

const ServiceCard = async () => {
  const [result] = await dbConnect.execute("select * from services");
  console.log(result);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {result.map((service) => (
        <div key={service.id}>
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                {/* <Badge variant="secondary">Featured</Badge> */}
              </CardAction>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">View Event</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
