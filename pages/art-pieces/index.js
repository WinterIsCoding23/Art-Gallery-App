import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage ({data, handleLike}) {
    console.log("data in ArtPieces: ", data);
    return (
        <div><ArtPieces pieces={data} handleLike={handleLike}/></div>
    )
}