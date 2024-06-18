'use client'
import {lazy, Suspense} from "react";

// @ts-ignore
// const RemoteApp = dynamic(() => import('remote/RemoteApp'), { ssr: false });
// const Navbar = lazy(() => import('remote/nav'));

let Navbar = () => null;
if (process.browser) {
    //useCustomHook = require('shop/customHook').default;
    // @ts-ignore
    Navbar = lazy(() => {
        // @ts-ignore
        return import('remote/nav');
    });
}
export default function Home() {
  return (
    <div>
      <h1>Host app</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar/>
        </Suspense>
    </div>
  );
}
