import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header className="p-10 bg-teal-300">
          <h1>nextjs 13</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
