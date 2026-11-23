import { Clock3, Mail, MapPin } from "lucide-react";
import React from "react";
import MapCon from "../components/MapCon";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const InfoCard = ({ Icon, title, children }) => (
  <div className="flex gap-4 items-start bg-white rounded-2xl p-5 sm:p-6 shadow-sm ring-1 ring-gray-100 h-full">
    <div className="shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-[#7A5DA8] to-[#F39821] shadow-sm">
      <Icon className="text-white w-6 h-6" />
    </div>
    <div className="flex flex-col gap-2 min-w-0 text-sm sm:text-base text-gray-500 leading-relaxed">
      <h2 className="text-lg md:text-xl font-bold text-gray-700">{title}</h2>
      {children}
    </div>
  </div>
);

const Contact = () => {
  return (
    <main className="bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Contact <span className="text-orange-400">Us</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <InfoCard Icon={Mail} title="Contact Us">
            <p>
              <span className="font-semibold text-gray-600">Call/WhatsApp: </span>
              <a href="tel:09158476665" className="hover:text-orange-500">09158476665</a>
            </p>
            <p className="break-all">
              <span className="font-semibold text-gray-600">Email: </span>
              <a href="mailto:Larvanigeria@gmail.com" className="hover:text-orange-500">Larvanigeria@gmail.com</a>
            </p>
          </InfoCard>

          <InfoCard Icon={Clock3} title="Opening Hours">
            <p><span className="font-semibold text-gray-600">Mon - Sat:</span> 8am - 4pm</p>
            <p><span className="font-semibold text-gray-600">Sunday:</span> 2pm - 4pm</p>
          </InfoCard>

          <div className="md:col-span-2 lg:col-span-1">
            <InfoCard Icon={MapPin} title="Our Office">
              <p>
                <span className="font-semibold text-gray-600">Ibadan: </span>
                NO 5, Akinsehinwa Street, Beside Adis Hotel, Off Favos bus stop, New Bodija, Ibadan.
              </p>
              <p>
                <span className="font-semibold text-gray-600">Abuja: </span>
                Inside Rosa Mystica School, Plot 216 Ave Maria Cottage, Waterboard Road, Off Liberty Junction, Byazhin, Kubwa, Abuja.
              </p>
            </InfoCard>
          </div>
        </div>
      </div>

      <MapCon />
      <ContactForm />
    </main>
  );
};

export default Contact;
