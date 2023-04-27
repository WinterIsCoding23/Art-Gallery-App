import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

import ArtPieces from "../components/ArtPieces";
import Layout from "../components/Layout";
import FavoriteButton from "../components/FavoriteButton";

//Fetch data
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL,fetcher);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
//useState for rendering pieces?
  //const [ pieces, setPieces ] = useState ()

//artPiecesInfo-state
//const [artPiecesInfo, setArtPiecesInfo] = useState();

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} data={data}/>
      {/* <Layout /> */}      
      <FavoriteButton />
    </>
  );
}
