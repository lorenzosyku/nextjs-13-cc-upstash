export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div className="p-5 bg-cyan-500">
        <h2>list of posts:</h2>
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
