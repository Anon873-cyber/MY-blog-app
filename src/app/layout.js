
import "./globals.css";
import NavBar from "@/components/NavBar";




export const metadata = {
  title: "Mind & Machine",
  description: "Blog app run by A scinece hobbyist ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="">
      <NavBar/>

        {children}</body>
    </html>
  );
}
