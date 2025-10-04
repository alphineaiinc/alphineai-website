export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold glass mb-4">
      {children}
    </h2>
  );
}
