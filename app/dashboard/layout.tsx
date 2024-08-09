import Sidenav from "../ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <Sidenav />
      {children}
    </main>
  );
}
