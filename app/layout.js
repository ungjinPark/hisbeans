import "./style/globals.css";
import { headers as nextHeaders } from "next/headers";
import MainHeader from "@/component/MainHeader";
import Script from "next/script";

export const metadata = {
  title: "히즈빈스 : 카페 바리스타 교육 자료",
  description: "히즈빈스 : 카페 바리스타 교육자료",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="ko">
      <body>
        <div className="root-layout">
          <MainHeader />
          {children}
          <footer>&copy; Gyeonghyeon</footer>
        </div>
      </body>
      
      <Script src="https://kit.fontawesome.com/739edf4b29.js" crossorigin="anonymous"></Script>
    </html>
  );
}
