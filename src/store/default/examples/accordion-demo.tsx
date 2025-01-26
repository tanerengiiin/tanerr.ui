import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/store/default/ui/accordion";
import { CreditCard, ShieldCheck, Truck } from "lucide-react";

export default function AccordionDemo() {
  return (
    <Accordion openMultiple={false} inset className="space-y-4 w-3/4">
      <AccordionItem>
        <AccordionTrigger>
          <CreditCard />
          What payment methods do you accept?
        </AccordionTrigger>
        <AccordionPanel>
          We accept all major credit and debit cards including Visa, MasterCard,
          and American Express. You can also pay using digital payment methods
          like PayPal, Apple Pay, and Google Pay for your convenience.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>
          <Truck />
          How long does shipping take?
        </AccordionTrigger>
        <AccordionPanel>
          Standard shipping typically takes 3-5 business days within the
          continental US. International shipping can take 7-14 business days
          depending on the destination. Express shipping options are available
          for faster delivery.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>
          <ShieldCheck />
          Is my personal information secure?
        </AccordionTrigger>
        <AccordionPanel>
          Yes, we take data security very seriously. All personal information is
          encrypted using industry-standard protocols, and we never share your
          data with third parties without your explicit consent. Our security
          measures are regularly updated to ensure maximum protection.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
