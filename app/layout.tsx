import SideBar from "./SideBar";
import "../styles/globals.css";
import "../styles/Style.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Movix</title>
      </head>
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
