import { Header, Footer } from "@/components/uis";

const Container = ({
  children,
  title = "---",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="font-mono bg-opacity-30 uppercase grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-16 text-n1-cream">
      <div className="bg-grid-mask !bg-size-[8px_6px] bg-blend-lighten opacity-10"></div>
      <Header title={title} />
      <main className="flex flex-col items-center justify-center gap-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
