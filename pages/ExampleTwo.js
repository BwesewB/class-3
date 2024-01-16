import { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleTwo() {
    //Square brackets prevents from running infinitley
    //[] makes sure useEffect only runs once per page load

    useEffect(() => {
        console.log("run")
    }, [])

    return(
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}