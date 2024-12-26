import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserCircle } from "lucide-react";

export default function AccordionDemo() {
  return (
    <Accordion openMultiple={false} className={"space-y-4 w-3/4"}>
      <AccordionItem>
        <AccordionTrigger>
          <UserCircle />
          How do I update my account information?
        </AccordionTrigger>
        <AccordionPanel inset>
          <div className="pb-2 pt-0">
            Major credit and debit cards like Visa, MasterCard, and American
            Express, as well as digital payment options like PayPal and Apple
            Pay.
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>
          <UserCircle />
          How do I update my account information?
        </AccordionTrigger>
        <AccordionPanel inset>
          <div className="pb-2 pt-0">
            Major credit and debit cards like Visa, MasterCard, and American
            Express, as well as digital payment options like PayPal and Apple
            Pay.
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>
          <UserCircle />
          How do I update my account information?
        </AccordionTrigger>
        <AccordionPanel inset>
          Major credit and debit cards like Visa, MasterCard, and American
          Express, as well as digital payment options like PayPal and Apple Pay.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
