import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ArtPieces pieces={data} />
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
