import type { Metadata } from "next";
import { Inter_Tight, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400"],
});


const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Smalls Bar | Your New Wine Bar in Midsomer Norton",
  description: "We're mixing things up behind the scenes — full website and menu coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${cormorantGaramond.variable}`}>
        {children}
        <Script
          src="https://static.klaviyo.com/onsite/js/YgPYiB/klaviyo.js?company_id=YgPYiB"
          strategy="afterInteractive"
        />
        <Script id="klaviyo-init" strategy="afterInteractive">
          {`
            !function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();
          `}
        </Script>
      </body>
    </html>
  );
}
