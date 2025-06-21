export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t border-border">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {currentYear} Eduardo Cortez. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ and a passion for sustainable design.
        </p>
      </div>
    </footer>
  );
}
