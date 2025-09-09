import Link from "next/link";

export const Divider = ({ num = 4 }: { num?: number }) => {
  return <span className="text-sm">{Array(num).fill("-").join("")}</span>;
};

export const LinkUnderline = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="relative inline-block group no-underline">
      <span className="text-n1-cream hover:text-n1-orange/50">{children}</span>
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-n1-orange/30 transition-transform duration-300 ease-in-out group-hover:translate-y-[1px] group-hover:bg-n1-orange/50 opacity-0 group-hover:opacity-100`}
      />
    </Link>
  );
};

export const Header = ({ title }: { title: string }) => {
  return (
    <header className="flex justify-between items-center w-full">
      <Link href="/" className="hover:underline">
        home
      </Link>
      <p>{title}</p>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full">
      <p>© {new Date().getFullYear()}</p>
      <div>0xn1</div>
    </footer>
  );
};
