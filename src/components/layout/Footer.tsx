import { CallCalling, Location, SmsEdit } from "iconsax-reactjs";
import AccordionComponent from "../Accordion";
import { Accordion } from "../ui/accordion";
import ShapeIcon from "./Shape";

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
    <div className="bg-primary-900 flex flex-col p-6 mt-6 lg:flex-row lg:py-5 lg:px-[108px] lg:items-center lg:justify-between">
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
      <div className="text-gray-100 flex items-center justify-center gap-2 border-t-2 border-t-primary-900">
        <p className="text-2xl">&copy;</p>
        <p>2023 Tech Heim. </p>
      </div>
      <div className="hidden lg:flex text-gray-100 lg:gap-12 cursor-pointer">
        {footerPolicy.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
