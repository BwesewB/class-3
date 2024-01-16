import { useState, useEffect } from "react"
export default function ExampleFive() {
    //we want to set up a counter
    //after every one second the number increases by 1
    //we want to dusplay that number on screen as it increases
    //no button is needed it will update automatically

    const [number, setNumber] = useState(0);


    useEffect(() => {  //takes in trigger value and runs if trigger is true
        var interval;
        interval = setInterval(() => {
            setNumber(number + 1)
        }, 1000)
        console.log(number);

        return () => clearInterval(interval); //clearing the interval so it doesnt get into a loop or go crazy
    })
    return(
        <>
        <div>
            <h1>{number}</h1>
        </div>
        </>
    )
}