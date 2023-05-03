//import {ReactComponent as Logo} from "../../assets"; 
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: red;
    color: white;
    box-shadow: 2px 2px pink;
    `

export default function FavoriteButton ( {isFavorite, slug, handleLike} ){

    return (
        <StyledButton type="button" onClick={()=> {handleLike(slug)}} >
            {/* <Logo /> */}
            {isFavorite ? "💔 I don't like this anymore" : "❤ Mark as favorite"}
        </StyledButton>
    )
}
