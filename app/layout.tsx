import SideBar from "../Components/HomePage/SideBar";
import "../styles/globals.css";
import "../styles/Style.css";
import SideBarProfile from "../Components/HomePage/SideBarProfile";
import Loading from "./loading";
import { Suspense } from "react";
import Header from "../Components/HomePage/Header";

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
      <Suspense fallback={<Loading />}>
        <body>
          <div className="container">
            <SideBar />
            {children}
          </div>
        </body>
      </Suspense>
    </html>
  );
}
