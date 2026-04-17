export const metadata = {
  title: "Mi Wiki Bot",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}