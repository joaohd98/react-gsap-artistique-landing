import React, {useRef} from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Artisan from "src/sections/artisan";

const Layout = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Artisan />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default Layout;
