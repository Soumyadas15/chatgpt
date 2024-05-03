"use client"

import { Conversation } from "@prisma/client"
import { SidebarItem } from "./sidebar-item"
import { SidebarTag } from "./sidebar-tag"
import { usePathname, useRouter } from "next/navigation";

interface SidebarConversationsProps{
    conversations: Conversation[];
}

export const SidebarConversations = ({
    conversations,
} : SidebarConversationsProps) => {

    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className="mt-6">
            <SidebarTag label="Yesterday"/>
            <div className="mt-4 flex flex-col">
                {conversations.map((conversation, index) => (
                    <div key={index} className="">
                        <SidebarItem 
                            isActive={pathname.startsWith(`/conversation/${conversation.id}`)} 
                            conversation={conversation}
                        />
                    </div>
                ))}
            </div>
            
        </div>
    )
}