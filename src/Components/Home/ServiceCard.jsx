import React from "react";
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
import Image from "next/image";
import Link from "next/link";

const ServiceCard = async () => {
  const [result] = await dbConnect.execute("select * from services");
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {result.map((service) => (
        <div key={service.id}>
          <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
            <div className="relative w-full h-50">
              <Image
                alt={service.title}
                src={service.image}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <CardHeader>
              <CardAction>
                {/* <Badge variant="secondary">Featured</Badge> */}
              </CardAction>
              <CardTitle className="mt-2">{service.title}</CardTitle>
              <CardDescription>{service.short_description}</CardDescription>
            </CardHeader>

            <CardFooter>
              <Link href={`services/${service.id}`}>
                <Button className="w-full text-white bg-secondary hover:cursor-pointer">
                  View Service
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
