export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)] bg-[var(--secondary)]">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <p className="text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Yi Tang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
