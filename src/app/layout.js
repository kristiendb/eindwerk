import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Grafisch ontwerp en illustratie",
  description: "studentenplatform voor grafisch ontwerp en illustratie",
};

const layout = ({ children }) => {
  return (
    <html lang="nl">
      <body className="font-space-grotesk overflow-x-hidden">
        <div className="w-full pt-8 p-3 md:p-8 mx-auto">
          <Navigation />
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
};
export default layout;
