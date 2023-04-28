import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage ({data, handleLike, favoriteSlugs}) {
    console.log("data in ArtPieces: ", data);
    return (
        <div><ArtPieces pieces={data} handleLike={handleLike} favoriteSlugs={favoriteSlugs}/></div>
    )
}