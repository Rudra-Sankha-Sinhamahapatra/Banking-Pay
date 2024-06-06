import { NextResponse } from "next/server"
import  PrismaClient  from "@repo/db/client" ;


export const GET = async () => {
 const user=  await PrismaClient.user.create({
        data: {
            email: "asd",
            name: "adsads",
            number: "221",
            password:"elo"
        }
    })
    return NextResponse.json({
        message: "User created",
        user
    })
}