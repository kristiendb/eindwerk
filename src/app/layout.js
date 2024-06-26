import Navigation from "@/components/Navigation";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Grafisch ontwerp en illustratie",
  description: "studentenplatform voor grafisch ontwerp en illustratie",
};

const layout = ({ children }) => {
  return (
    <html lang="nl">
      <body className="font-space-grotesk overflow-x-hidden">
        <link rel="icon" href="favicon.svg" sizes="any" />
        <meta property="og:image" content="go-i_building.jpg" />
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
        <Toaster />
      </body>
    </html>
  );
};
export default layout;
