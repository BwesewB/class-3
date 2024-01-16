import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFour() {
    //Number is a variable on the left that is used to display or grab values from useState
    //setNumber is used to update the useState
    const [number, setNumber] = useState(0); //Numebrs starts at number 0
    const [color, setColor] = useState("gray"); //colour initially gray

    const [trigger, setTrigger] = useState(false); //defaults as boolean false

    const HandleChange = () => {
        if(number > 2){         //on first click the number is still less than 2 so it wont change
            setColor("orange");
        }
        console.log(number);
    }
 
    useEffect(() => {  //takes in trigger value and runs if trigger is true
        var interval;

        if(trigger){            //basically if true than this triggers
            interval = setInterval(() => {
                HandleChange()
                setTrigger(false);
            }, 3000) //after 3 seconds then it will do the conosole log
        }

        console.log(number);
        console.log(trigger);

        return () => clearInterval(interval); //clearing the interval so it doesnt get into a loop
    }, [trigger])

    return(
        <>
            <Header/>
            <main>
                <button onClick={() => {
                    setNumber(number + 1)   //when clicked it will adjust the value by incrementing 1
                    setTrigger(true)    //changing inital false to true
                }}>
                    AddNumber
                </button>
                <h1 style={{color: color}}>Changing the text color</h1>

                {
                    number > 1 && <div style={{ //only if the number is greater than 1, then dispaly the box. if it is true show the div
                        backgroundColor:`${color}`,
                        lineHeight: 10, 
                        }}>box
                        </div>
                }
            </main>
            <Footer/>
        </>
    )
}