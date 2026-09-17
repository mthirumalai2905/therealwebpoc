import { DocsNav } from "@/components/DocsNav";
import { DocsBrowseBar } from "@/components/NavPalette";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="hidden border-r border-[var(--line)] bg-[var(--bg-elev)] md:block">
        <div className="nav-scroll sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-6">
          <DocsNav />
        </div>
      </aside>
      <div className="min-w-0">
        <DocsBrowseBar />
        {children}
      </div>
    </div>
  );
}
