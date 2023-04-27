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
  // console.log("data inside function App: ", data)

  //artPiecesInfo-state
  const [artPiecesInfo, setArtPiecesInfo] = useState(data);
 
    // Marcell: function handleLikeArtPiece(piece){
    //   setArtPiecesInfo([...artPiecesInfo, piece.slug]);
    // }

  function handleLike(piece){
    setArtPiecesInfo((artPiecesInfo)=> {
      // find the artpiece in state
      const info = artPiecesInfo.find((info) => info.slug === slug);

      // if artpiece is already in state, toggle the isFavorite-property
      if (info){
        return artPiecesInfo.map((info) => 
          info.slug === piece.slug ? {...info, isFavorite: !info.isFavorite } : info );
      }
      // if artpiece is not in the state, add it with isFavorite set to true
      return [...artPiecesInfo, { slug, isFavorite: true }];
    })
  }
  console.log("artPiecesInfo inside function App: ", artPiecesInfo)

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data){
    return <h1>Loading...</h1>;
  }

  // find artpiece in the state, default isFavorite to false
  const info = artPiecesInfo?.find((info)=> info.slug === slug) ?? { isFavorite: false };

  const { isFavorite } = info;
        
    //Marcell:   artPiecesInfo.map((artPiece)=> {if (artPiece.slug === piece.slug){return artPiece} else {return }  }));
    // }

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} data={data}/>
      <FavoriteButton slug={slug} isFavorite={isFavorite} handleLike={handleLike}/>
    </>
  );
}
