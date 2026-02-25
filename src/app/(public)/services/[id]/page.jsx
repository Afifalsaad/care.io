import BookButton from "@/Components/Buttons/BookButton";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { dbConnect } from "@/lib/dbConnect";
import { Banknote, CheckCircle, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const [product] = await dbConnect.execute(
    `select * from services where id = ${id}`
  );
  const result = product[0];
  console.log("from metadata", result);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  const { title, bangla, image, description } = result;
  const pageTitle = `${title} | Hero Kidz`;

  return {
    title: pageTitle,
    description:
      description || bangla || "Check out this amazing product on Hero Kidz.",
    url: `https://yourapp.com/product/${id}`,
    image: image || "https://i.ibb.co.com/s9brDwvd",
    type: "product",
    openGraph: {
      title: pageTitle,
      description: description || bangla,
      url: `https://yourapp.com/product/${id}`,
      site_name: "Hero Kidz",
      images: [
        {
          url: image || "https://i.ibb.co.com/s9brDwvd",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@YourTwitterHandle",
      creator: "@YourTwitterHandle",
      title: pageTitle,
      description: description || bangla,
      images: [image || "https://i.ibb.co.com/s9brDwvd"],
    },
    robots: "index, follow",
    keywords: ["product", "e-commerce", "react", "next.js", "mern"],
  };
}

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const [rows] = await dbConnect.execute(
    `select * from services where id = ${id}`
  );
  const result = rows[0];
  return (
    <div>
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src={result.image}
                alt={result.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-500 hover:bg-green-600 px-3 py-1 capitalize">
                  {result.status}
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                  {result.title}
                </h1>
                <p className="text-xl italic">{result.short_description}</p>
              </div>

              <div className="flex flex-wrap gap-4 py-4 border-y border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <Banknote className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Price</p>
                    <p className="font-semibold">{result.price} BDT</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 bg-purple-500/10 rounded-full">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Duration</p>
                    <p className="font-semibold">{result.duration}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Service Overview
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {result.description}
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <BookButton result={result}></BookButton>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl flex-1 hover:cursor-pointer">
                  Contact Support
                </Button>
              </div>

              <p className="text-xs text-slate-500 pt-4 text-center sm:text-left">
                Last Updated: {new Date(result.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
