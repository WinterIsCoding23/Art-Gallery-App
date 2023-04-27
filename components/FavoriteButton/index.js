

export default function FavoriteButton ( isFavorite, onToggleFavorite ){
    return (
        <button onClick={onToggleFavorite()}>Mark as favorite</button>
    )
}