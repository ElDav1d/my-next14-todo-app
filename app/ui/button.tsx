interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="p-3 bg-blue-600 text-white">
      {children}
    </button>
  );
}
