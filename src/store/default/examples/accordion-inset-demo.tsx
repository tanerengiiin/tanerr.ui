import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/store/default/ui/accordion";
import { Building2, Briefcase } from "lucide-react";

export default function AccordionInsetDemo() {
  return (
    <Accordion openMultiple={false} className="space-y-4 w-3/4">
      <AccordionItem>
        <AccordionTrigger>
          <Building2 />
          About Our Company
        </AccordionTrigger>
        <AccordionPanel inset>
          Founded in 2010, we&apos;re a leading technology solutions provider
          specializing in cloud computing, artificial intelligence, and digital
          transformation. Our mission is to empower businesses through
          innovative technology solutions.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>Our Team Culture</AccordionTrigger>
        <AccordionPanel>
          We foster an inclusive, collaborative environment where creativity and
          innovation thrive. Our team members enjoy flexible working
          arrangements, continuous learning opportunities, and a comprehensive
          benefits package including health insurance and annual wellness
          programs.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>
          <Briefcase />
          Career Opportunities
        </AccordionTrigger>
        <AccordionPanel inset>
          We&apos;re always looking for talented individuals to join our growing
          team. We offer positions across various departments including software
          development, project management, design, and customer success. Visit
          our careers page to view current openings.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
