import Navigation from "@/components/Navigation";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Grafisch ontwerp en illustratie",
  description: "studentenplatform voor grafisch ontwerp en illustratie",
  icons: {
    icon: "/favicon.ico",
  },
};

const layout = ({ children }) => {
  return (
    <html lang="nl">
      <body className="font-space-grotesk overflow-x-hidden">
        <NextTopLoader
          color="#70f0b3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 0px #2299DD,0 0 0px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <div className="w-full pt-8 p-3 md:p-8 mx-auto">
          <Navigation />
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
};
export default layout;
