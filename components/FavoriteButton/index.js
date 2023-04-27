//import {ReactComponent as Logo} from "../../assets"; 

export default function FavoriteButton ( {isFavorite, slug, handleLike} ){

    return (
        <button onClick={()=> {handleLike(slug)}} >
            {/* <Logo /> */}
            {isFavorite ? "No favorite anymore" : "Mark as favorite"}
        </button>
    )
}