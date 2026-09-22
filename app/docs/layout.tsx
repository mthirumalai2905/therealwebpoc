import { DocsNav } from "@/components/DocsNav";
import { DocsBrowseBar } from "@/components/NavPalette";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="hidden border-r border-[var(--line)] bg-[var(--bg)] md:block">
        <div className="nav-scroll sticky top-14 h-[calc(100dvh-3.5rem)] overflow-y-auto px-4 py-6">
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
