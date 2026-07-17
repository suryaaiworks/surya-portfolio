export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Surya Sai Teja. Built with Next.js.
        </p>
        <p className="font-mono text-xs text-text-muted">
          Designed &amp; engineered end-to-end.
        </p>
      </div>
    </footer>
  );
}
