"use client";

import dynamic from "next/dynamic";
import Title from "../../custome/Title";
import ContactForm from "./ContactForm";
import SocialButton from "../../custome/SocialButton";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import PageTitle from "../../custome/PageTitle";
import { DynamicBreadcrumb } from "../../custome/DynamicBreadcrumb";
// تحميل الماب بدون SSR
const Map = dynamic(() => import("./ContactMap"), { ssr: false });

const ContactPage = () => {
 

  return (
    < >
      
        {/* <PageTitle /> */}
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 md:pt-6 gap-10 mb-20">
        
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-md ">
          <Map />
        </div>

     {/* Contact Info */}
<div className="text-left max-w-md">
  <h3 className="font-semibold text-xl mb-3">
    Find Us Easily on the Map
  </h3>

  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
    We’re always happy to hear from you. Whether you have a question, need
    support, or just want to say hello, feel free to reach out. Our team is
    available and ready to assist you with anything you need.
  </p>

  {/* Info List */}
  <ul className="space-y-4 mb-6">
    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-500">
      {/* <span className="text-primary mt-0.5">📍</span> */}
      <span>
        <span className="font-medium">Address:</span> Gaza, Palestine
      </span>
    </li>

    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-500">
      {/* <span className="text-primary mt-0.5">📧</span> */}
      <span>
        <span className="font-medium">Email:</span> support@example.com
      </span>
    </li>

    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-500">
      {/* <span className="text-primary mt-0.5">📞</span> */}
      <span>
        <span className="font-medium">Phone:</span> +970 599 000 000
      </span>
    </li>
  </ul>

  {/* Social */}
  <div>
    <p className="text-sm text-gray-500 mb-3 dark:text-gray-300">
      Follow us on social media for updates and announcements
    </p>

    <div className="flex gap-4">
      <SocialButton icon={<FaFacebookF />} />
      <SocialButton icon={<FaGoogle />} />
      <SocialButton icon={<FaApple />} />
    </div>
  </div>
</div>

      </div>

      {/* Title */}
     
        <Title 
          title="Let’s Get In Touch"
          subTitle="Have questions or feedback? Our team is here to assist you anytime."
        />
      

        
        {/* Form */}
       

        <ContactForm />
    </>
  );
};

export default ContactPage;
