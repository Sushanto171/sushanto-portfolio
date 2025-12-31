
export default function SectionHeader({title}:{title:string}) {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-3  pb-3 pt-5">
        <span className="h-8 w-1 bg-primary rounded-full" />
        <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em]">
      {title}
        </h2>
      </div>
    </div>
  );
}