import Image from "next/image";

export default function Spotlight ( {image, artist} ){
    return (
        <div>
            <Image src={image} alt="spotlight"/>
            <h4>{artist}</h4>
        </div>
    )
}