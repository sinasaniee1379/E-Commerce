import { CallCalling, Location, SmsEdit } from "iconsax-reactjs";
import AccordionComponent from "../Accordion";
import { Accordion } from "../ui/accordion";
import ShapeIcon from "./Shape";
import Image from "next/image";
import ImageFooter from "@/assets/svg/Ellipse.svg";
const Footer = () => {
  const footerLists = [
    {
      title: "Company",
      subTitle: [
        {
          title: "about us",
        },
        {
          title: "blog",
        },
        {
          title: "returns",
        },
        {
          title: "order status ",
        },
      ],
    },
    {
      title: "Info",
      subTitle: [
        {
          title: "How it works?",
        },
        {
          title: "our promises",
        },
        {
          title: "FAQ",
        },
      ],
    },
    {
      title: "Contact us",
      subTitle: [
        {
          title: "123 Main Street, Anytown,USA",
          icon: (
            <Location size={20} variant="Linear" className="stroke-gray-100" />
          ),
        },
        {
          title: "+1 (555) 123-4567",
          icon: (
            <CallCalling
              size={20}
              variant="Linear"
              className="stroke-gray-100"
            />
          ),
        },
        {
          title: "TechHeimSupport@gmail.com",
          icon: (
            <SmsEdit size={20} variant="Linear" className="stroke-gray-100" />
          ),
        },
      ],
    },
  ];
  const footerPolicy = [
    { title: "cookie settings" },
    { title: "Privacy Policy" },
    { title: "Terms and Conditions " },
    { title: "Imprint " },
  ];
  const accordionList = [
    { title: "Company" },
    { title: "Info" },
    { title: "Contact us" },
  ];
  return (
    <div className="bg-primary-900 flex flex-col p-6 mt-6 relative lg:py-5 lg:px-[5%] lg:items-center lg:justify-between">
      <div className="gap-28 hidden lg:flex w-full ">
        {footerLists.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="text-white font-medium">{item.title}</span>
            {item.subTitle.map((itm, idx) => (
              <p className="text-gray-100 text-base font-light" key={idx}>
                {itm.title}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className=" w-full">
        <Image
          src={ImageFooter}
          width={249}
          height={124}
          alt="image"
          className="w-full absolute bottom-20 lg:bottom-16 left-0"
        />
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full relative lg:hidden">
        {accordionList.map((item, index) => (
          <AccordionComponent
            accordionTitle={item.title}
            value={item.title}
            key={index}>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionComponent>
        ))}
      </Accordion>
      <div className="flex lg:flex-row lg:items-center lg:justify-between justify-center lg:w-full mt-24">
        <div className="text-gray-100 flex items-center justify-center gap-2 border-t-2 border-t-primary-900">
          <p className="text-2xl">&copy;</p>
          <p>2023 Tech Heim. </p>
        </div>
        <div className="hidden lg:flex text-gray-100 lg:gap-12 cursor-pointer ">
          {footerPolicy.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
