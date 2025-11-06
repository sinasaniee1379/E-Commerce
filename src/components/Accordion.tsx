import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionProps } from "./types";

const AccordionComponent = ({ accordionTitle, value }: AccordionProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-white font-medium">
        {accordionTitle}
      </AccordionTrigger>
      <AccordionContent className="text-white">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionComponent;
