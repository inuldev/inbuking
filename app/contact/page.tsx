import { Metadata } from "next";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

import ContactForm from "@/components/contact-form";
import HeaderSection from "@/components/header-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page",
};

const ContactPage = () => {
  return (
    <div>
      <HeaderSection
        title="Contact Us"
        subTitle="Lorem ipsum dolor sit amet."
      />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get in touch today
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, sed id. Magnam fugiat error magni.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoMailOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Email :</h4>
                  <p>email-us@inbuking.com</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoCallOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Phone :</h4>
                  <p>+99876 5432 1098, +8765 4321 0987</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                  <IoLocationOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Address :</h4>
                  <p>Konoha Street Road 212, WKWK, WAKANDA</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
