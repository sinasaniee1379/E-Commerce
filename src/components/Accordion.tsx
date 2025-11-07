import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionProps } from "./types";
import { twMerge } from "tailwind-merge";

const AccordionComponent = ({
  accordionTitle,
  value,
  children,
  classnameTrigger,
  classnameContent,
}: AccordionProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        className={twMerge("text-white font-medium", classnameTrigger)}>
        {accordionTitle}
      </AccordionTrigger>
      <AccordionContent className={twMerge("text-white", classnameContent)}>
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionComponent;
