import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState, useEffect } from "react";

import ArtPieces from "../components/ArtPieces";
import Layout from "../components/Layout";
import FavoriteButton from "../components/FavoriteButton";

//Fetch data
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  //artPiecesInfo-state
  const [favoriteSlugs, setFavoriteSlugs] = useState([]);
   
  function handleLike(clickedSlug){
    setFavoriteSlugs((favoriteSlugs)=> {
      // debugger
      const isFavorite = favoriteSlugs.find((slug) => slug === clickedSlug);
      if (isFavorite){
        return favoriteSlugs.filter((slug) => slug !== clickedSlug);
      }
      return [...favoriteSlugs, clickedSlug];
    })
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data){
    return <h1>Loading...</h1>;
  }
        
    //Marcell:   artPiecesInfo.map((artPiece)=> {if (artPiece.slug === piece.slug){return artPiece} else {return }  }));
    // }

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} data={data} handleLike={handleLike} favoriteSlugs={favoriteSlugs}/>
    </>
  );
}
