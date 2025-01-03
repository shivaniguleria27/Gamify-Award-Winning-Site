import "./globals.css";

export const metadata = {
  title: "Gamify",
  description: "Award Winning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
