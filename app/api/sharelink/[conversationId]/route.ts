import getCurrentProfile from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
    conversationId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
    try {

        const { conversationId } = params;

        const currentUser = await getCurrentProfile();

        if(!currentUser){
            return null;
        }

        const conversation = await db.conversation.findUnique({
            where: {
                id: conversationId
            }
        })

        if(!conversation){
            return null;
        }

        const existingShareLink = await db.sharelink.findFirst({
            where: {
                conversationId: conversation.id,
            }
        });

        if(existingShareLink){
            return NextResponse.json(existingShareLink, { headers: { "Content-Type": "application/json" } });
        }

        const shareLink = await db.sharelink.create({
            data: {
                conversationId: conversation.id,
            }
        });

        
        return NextResponse.json(shareLink, { headers: { "Content-Type": "application/json" } });


    } catch (error : any) {
        if (error instanceof Error) {
            console.log(error.message)
            return new Response(error.message, { status: 500 });
        } else {
            console.log(error.message)
            return new Response('An unknown error occurred', { status: 500 });
        }
    }
}