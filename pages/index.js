import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://example-apis.vercel.app/api/art"; 

export default function App() {
  const { data, error, isLoading } = useSWR(URL,fetcher);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Link href="/components/Spotlight">Spotlight</Link>
      <Link href="/components/ArtPieces">Pieces</Link>
      <ArtPieces pieces={data} />
      <Spotlight />
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
