import useSWR from "swr";
import Link from "next/link";

import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";



// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const URL = "https://example-apis.vercel.app/api/art"; 

export default function SpotlightPage() {
  // const { data, error, isLoading } = useSWR(URL,fetcher);

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      <section>
        <div>
          <Link href="/components/spotlight">Spotlight</Link>          
        </div>
        <div>
          <Link href="/components/artpieces">Pieces</Link>
        </div>
      </section>
      <section>        
        <Spotlight />
      </section>
    </div>
  );
}


/* export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
 */
