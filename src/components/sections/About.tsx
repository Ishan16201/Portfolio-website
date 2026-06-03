import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutParagraphs } from "@/data/content";

export function About() {
  return (
    <section id="about" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About
          </span>
          <div className="glass rounded-2xl p-8 md:p-10">
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-text-primary md:text-lg ${
                  i < aboutParagraphs.length - 1 ? "mb-4" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
