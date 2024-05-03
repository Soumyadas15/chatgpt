import { Message } from "@prisma/client"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

interface ConversationMessageProps{
    message: Message;
}

export const ConversationMessage = ({
    message,
} : ConversationMessageProps) => {

    const name = message.isAiReply ? 'ChatGPT' : 'You';

    return (
        <div className="w-full h-auto flex items-start gap-3">
            {(name === 'You') ? (
                <Avatar className="h-6 w-6 mt-1">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            ) : (
                <>
                    <div className='p-1 block dark:hidden rounded-full bg-white border-1 border-neutral-300'>
                        <Image
                            src={'/assets/images/icon_black.png'}
                            alt='icon'
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className='p-1 hidden dark:block rounded-full bg-neutral-700 border-1 border-neutral-700'>
                        <Image
                            src={'/assets/images/icon_white.png'}
                            alt='icon'
                            width={20}
                            height={20}
                        />
                    </div>
                </>
            )}
            
            <div className="flex flex-col">
                <p className="text-black dark:text-white font-semibold">{name}</p>
                <p className="text-black dark:text-white font-light">{message.body}</p>
            </div>
        </div>
    )
}