import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const[number, setNumber] = useState(0)

    // Usually causes Infinte Loop so dont do this. code on pages will usually run twice
    // Without square brackets at the end it iwll infinte loop
    /*
    useEffect(() => {
        console.log("run");
    }, []) THis one has square brackets seen in example 2
    */

    useEffect(() => {
            console.log(number)
    })

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinite Loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}