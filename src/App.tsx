/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Interactive mouse-scrub controlled background video */}
      <BackgroundVideo />

      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Full-screen hero section */}
      <HeroSection />
    </div>
  );
}

