"use client";

type ButtonPrimaryProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function ButtonPrimary({ children, href, onClick }: ButtonPrimaryProps) {
  if (href) {
    return (
      <a href={href} className="btn-glass-glow" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className="btn-glass-glow" onClick={onClick}>
      {children}
    </button>
  );
}
