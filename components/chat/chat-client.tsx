"use client";

import { useMessage } from "@/contexts/message-provider";
import Image from "next/image";
import { ChatItem } from "./chat-item";
import { Loader } from "../loader";

interface ChatClientProps {
    currentUser: any;
}

export const ChatClient = ({
    currentUser
}: ChatClientProps) => {
    const { message, loading, reply } = useMessage();
    console.log(message);

    return (
        <>
            {message ? (
                <>
                    <ChatItem name="You" currentUser={currentUser} body={message}/>
                    {loading ? (
                        <div className="h-20 w-20 mt-10 -ml-5">
                            <Loader/>
                        </div>
                    ) : (
                        <div className="mt-10">
                            <ChatItem name="ChatGPT" currentUser={currentUser} body={reply!}/>
                        </div>
                    )}
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
                        <div className='p-2 block dark:hidden rounded-full bg-white border-[1px] border-neutral-300'>
                            <Image
                                src={'/assets/images/icon_black.png'}
                                alt='icon'
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className='p-2 hidden dark:block rounded-full bg-transparent border-[1px] border-neutral-700'>
                            <Image
                                src={'/assets/images/icon_white.png'}
                                alt='icon'
                                width={30}
                                height={30}
                            />
                        </div>
                        <h1 className="text-2xl font-semibold text-black dark:text-white">How can I help you today?</h1>
                    </div>
                </div>
            )}
        </>
    );
};
