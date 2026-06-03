import { ContentCard } from "@/components/ui/ContentCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/ScrollReveal";
import { researchPapers } from "@/data/content";

export function Research() {
  return (
    <section id="research" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <ScrollReveal>
          <SectionHeader label="Academic" title="Research" />
        </ScrollReveal>
        <StaggerReveal className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {researchPapers.map((paper) => (
            <StaggerItem key={paper.id}>
              <ContentCard
                id={paper.id}
                title={paper.title}
                description={paper.description}
                href={paper.href}
                linkLabel="View on SSRN →"
                badge="SSRN"
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
