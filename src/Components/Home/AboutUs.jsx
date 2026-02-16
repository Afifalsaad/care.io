import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          {/* Header */}
          <div className="text-center max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-left text-primary mb-4">
              About Our Care Services
            </h2>
            <p className="text-primary sm:text-sm text-left">
              We provide trusted babysitting and elderly care services, ensuring
              safety, <br /> comfort, and compassion for your loved ones at
              home.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="w-full rounded-lg overflow-hidden border shadow-lg">
              <Image
                className="h-100 w-full"
                alt="care"
                src="/Blue and White Modern Home Care Service Social Media.jpg"
                width={180}
                height={50}></Image>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Compassionate Care for Every Generation
              </h3>
              <p className="text-primary">
                Our team of professional caregivers is dedicated to providing
                safe and nurturing support for both children and seniors. We
                understand the importance of trust and reliability in every
                household.
              </p>
              <p className="text-primary">
                From interactive babysitting sessions that foster growth and
                creativity to elderly care that emphasizes comfort and dignity,
                we ensure your loved ones receive the attention they deserve.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <button className="px-6 py-3 bg-secondary text-white rounded-full font-medium hover:bg-purple-700 transition-all cursor-pointer">
                  Learn More
                </button>
                <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-purple-100 dark:bg-gray-800 dark:text-white dark:hover:bg-purple-700 transition-all cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
