//import {ReactComponent as Logo} from "../../assets"; 

export default function FavoriteButton ( {isFavorite, slug, handleLike} ){

    return (
        <button onClick={()=> {handleLike(slug)}} >
            {/* <Logo /> */}
            {isFavorite ? "I don't like this anymore" : "Mark as favorite"}
        </button>
    )
}