import { ContentCard } from "@/components/ui/ContentCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/ScrollReveal";
import { books } from "@/data/content";

export function Books() {
  return (
    <section id="books" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <ScrollReveal>
          <SectionHeader label="Published Works" title="Books" />
        </ScrollReveal>
        <StaggerReveal className="grid gap-7 sm:grid-cols-2">
          {books.map((book) => (
            <StaggerItem key={book.id}>
              <ContentCard
                id={book.id}
                title={book.title}
                description={book.description}
                href={book.href}
                linkLabel="Read on Amazon →"
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
