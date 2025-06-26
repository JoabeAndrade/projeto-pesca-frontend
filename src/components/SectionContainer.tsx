type SectionContainerProps = {
  title: string,
  children: React.ReactNode,
};

export default function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <section>
      <h2 className="text-xl font-medium text-[#6d4c41] mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </section>
  );
}