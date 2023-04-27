import Link from "next/link";

export default function Navigation (){
    return (
        <container>
            <div>
                <Link href="/components/spotlight">Now in the spotlight:</Link>
            </div>
            <div>
                <Link href="/artpieces">You find all art pieces here:</Link>
            </div>
        </container>
    )
}