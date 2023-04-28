import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage ({data, handleLike, favoriteSlugs}) {
    return (
        <div><ArtPieces pieces={data} handleLike={handleLike} favoriteSlugs={favoriteSlugs}/></div>
    )
}