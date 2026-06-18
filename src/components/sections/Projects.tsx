import { ContentCard } from "@/components/ui/ContentCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/ScrollReveal";
import { ExternalLinkIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <ScrollReveal>
          <SectionHeader label="Engineering" title="Projects" />
        </ScrollReveal>
        <StaggerReveal className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ContentCard
                id={project.id}
                title={project.title}
                description={project.description}
                href={project.href}
                linkLabel="View repo →"
                badge="GitHub"
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
        <ScrollReveal className="mt-12 text-center" delay={0.15}>
          <Button href="https://github.com/Ishan16201" variant="gold" external>
            View all on GitHub
            <ExternalLinkIcon className="h-4 w-4" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
