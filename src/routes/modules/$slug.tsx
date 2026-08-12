import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Target, BookOpen, Hammer } from "lucide-react";
import { modules } from "@/data/modules";

export const Route = createFileRoute("/modules/$slug")({
  loader: ({ params }) => {
    const index = modules.findIndex((m) => m.slug === params.slug);
    const found = modules[index];
    if (index === -1 || !found) throw notFound();
    return {
      module: found,
      prev: modules[index - 1] ?? null,
      next: modules[index + 1] ?? null,
    };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Module not found — Clove Nigeria" }, { name: "robots", content: "noindex" }],
      };
    }

    const title = `Module ${loaderData.module.number}: ${loaderData.module.title} — Clove Nigeria`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.module.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.module.summary },
      ],
    };
  },
  component: ModuleDetail,
});

function ModuleDetail() {
  const { module, prev, next } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link
        to="/modules"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" /> Duk darussa
      </Link>

      <p className="eyebrow mt-8">Module {module.number}</p>
      <h1 className="mt-3 text-3xl sm:text-4xl">{module.title}</h1>
      <p className="mt-4 text-muted-foreground">{module.summary}</p>

      <section className="surface-card mt-10 rounded-xl p-6">
        <h2 className="flex items-center gap-2 text-lg">
          <Target className="size-5 text-primary" /> Manufofin Koyo
        </h2>
        <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
          {module.objectives.map((o) => (
            <li key={o} className="flex gap-2.5">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {o}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-cream p-6">
        <h2 className="flex items-center gap-2 text-lg">
          <BookOpen className="size-5 text-primary" /> Ka&apos;ida
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {module.theory.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </section>

      <section className="surface-card mt-6 rounded-xl p-6">
        <h2 className="flex items-center gap-2 text-lg">
          <Hammer className="size-5 text-primary" /> Ayyukan Aiki
        </h2>
        <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
          {module.practicals.map((p) => (
            <li key={p} className="flex gap-2.5">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-12 flex flex-wrap justify-between gap-4 border-t border-border pt-6">
        {prev ? (
          <Link
            to="/modules/$slug"
            params={{ slug: prev.slug }}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <ArrowLeft className="size-4" /> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to="/modules/$slug"
            params={{ slug: next.slug }}
            className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            {next.title} <ArrowRight className="size-4" />
          </Link>
        )}
      </nav>
    </article>
  );
}
