import Spotlight from "../components/Spotlight";

export default function SpotlightPage ({data, handleLike, favoriteSlugs}) {
    return (
        <div><Spotlight pieces={data} handleLike={handleLike} favoriteSlugs={favoriteSlugs}/></div>
    )
}