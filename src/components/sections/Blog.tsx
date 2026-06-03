import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <ScrollReveal>
          <div className="glass rounded-2xl p-10 text-center md:p-14">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Writing
            </span>
            <h2 className="mb-3 text-3xl font-bold text-text-heading md:text-4xl">
              The Trading Mind
            </h2>
            <p className="mx-auto mb-8 max-w-md text-text-secondary">
              Writing on trading, markets, and the mental game.
            </p>
            <Button href="https://thetradingmind.substack.com" external>
              Read on Substack →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
