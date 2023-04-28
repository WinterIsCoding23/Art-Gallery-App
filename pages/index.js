import useSWR from "swr";
import Link from "next/link";

import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";
import Navigation from "../components/Navigation";

export default function SpotlightPage() {
  return (
    <div>
      <section>
        <Spotlight />
      </section>
    </div>
  );
}
