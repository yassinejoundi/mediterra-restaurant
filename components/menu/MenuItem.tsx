type MenuItemProps = {
  description: string;
  name: string;
  price: string;
  tag?: string;
};

export function MenuItem({ description, name, price, tag }: MenuItemProps) {
  return (
    <article className="group py-6 first:pt-0 last:pb-0">
      <div className="flex items-baseline gap-4">
        <h3 className="min-w-0 font-heading text-xl leading-snug text-espresso transition-colors group-hover:text-wine sm:text-2xl">
          {name}
        </h3>
        <span className="min-w-6 flex-1 border-b border-dotted border-terracotta/35" aria-hidden="true" />
        <p className="shrink-0 font-body text-sm font-semibold text-wine tabular-nums sm:text-base">{price}</p>
      </div>
      <p className="mt-2 max-w-xl text-pretty text-sm leading-6 text-espresso/70 sm:text-base sm:leading-7">{description}</p>
      {tag ? (
        <p className="mt-3 inline-flex rounded-full bg-sage/60 px-3 py-1 font-label text-[0.65rem] font-bold uppercase tracking-[0.14em] text-espresso">
          {tag}
        </p>
      ) : null}
    </article>
  );
}
