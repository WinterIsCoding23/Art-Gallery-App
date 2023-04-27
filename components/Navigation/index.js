import Link from "next/link";

export default function Navigation (){
    return (
        <div>
            <h4>
                <Link href="/spotlight">Now in the spotlight:</Link>
                <Link href="/artpieces">You find all art pieces here:</Link>
            </h4>
        </div>
    )
}