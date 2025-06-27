type PageTitleProps = {
  title: string,
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="flex flex-row w-full h-14 justify-between items-center my-6">
      <h1 className="text-black text-4xl">{title}</h1>
    </div>
  );
}
