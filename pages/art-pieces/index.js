import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage ({data}) {
    console.log("data in ArtPieces: ", data);
    return (
        <div><ArtPieces pieces={data}/></div>
    )
}