import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-sky-50 to-orange-50">
      <div className="flex items-center mb-4">
        <Image
          src="/logo.png"
          alt="Holistic Yog Foundation Logo"
          width={100}
          height={100}
          className="mr-2"
        />
        <h1 className="text-2xl font-bold text-sky-700">
          Holistic Yog Foundation
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
        {/* Left side with logo and gradient */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center min-h-[200px]">
          <div className="relative w-full h-[200px] md:h-full">
            <Image
          src="/photo.jpg"
          alt="Wellness Logo"
          fill
          className="object-fit"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-sky-700 mb-2 text-center md:text-left">
            We're Improving Our Experience
          </h1>
          <div className="w-16 md:w-20 h-1 bg-orange-400 mb-4 md:mb-6 mx-auto md:mx-0"></div>

          <p className="text-gray-600 mb-6 md:mb-8 text-center md:text-left">
            Our website is currently undergoing scheduled maintenance. We'll
            be back soon with a refreshed experience. Thank you for your
            patience.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
          <Phone className="w-5 h-5 text-orange-500 mr-3" />
          <p className="text-gray-700">
            Contact us: <br />
            <a
              href="tel:+919322528799"
              className="font-medium text-sky-700 hover:text-sky-800 transition-colors"
            >
              Dr. Balwant : +91 93225 28799
            </a>
            <br />
            <a
              href="tel:+919820596638"
              className="font-medium text-sky-700 hover:text-sky-800 transition-colors"
            >
              Dr. Nilesh : +91 9820596638
            </a>
            <br />
          </p>
            </div>

            <div className="flex items-center">
          <Mail className="w-5 h-5 text-orange-500 mr-3" />
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:holisticyog09@gmail.com"
              className="font-medium text-sky-700 hover:text-sky-800 transition-colors"
            >
              holisticyog09@gmail.com
            </a>
          </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>© 2025 Holistic Yog Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
