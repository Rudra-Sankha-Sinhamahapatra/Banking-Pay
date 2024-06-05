"use client"
import { Center } from "@repo/ui/center"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/text-input"
import {useState} from "react"
import { Button } from "@repo/ui/button"

export const SendCard=()=>{
    const [amount, setAmount] = useState("")
    const [number, setNumber] = useState("")
return(
    <>
    <div className="h-fit  bg-white pb-0">
    <Card title="Send">
   <div className="min-w-72 pt-2">
     <TextInput placeholder={"Number"} label="Number" onChange={(value)=>{
      setNumber(value);     
     }}/>
     <TextInput placeholder={"Amount"} label="Amount" onChange={(value)=>{
     setAmount(value);
     }}/> 
     <div className="flex justify-center pt-6">
     <Button onClick={()=>{

}}>Send</Button>
     </div>
   </div>
    </Card>
    </div>
    </>
)
}