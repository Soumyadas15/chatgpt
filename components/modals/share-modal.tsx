"use client"

import { useModal } from "@/hooks/use-modal-store";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { ChatsCard } from "../chats-card";
import createShareLink from "@/actions/create-sharelink";
import { useState } from "react";
import toast from "react-hot-toast";


interface ShareModalProps{
    currentUser: any;
}

export const ShareModal = ({
    currentUser,
} : ShareModalProps) => {

    const { onOpen, isOpen, onClose, type, shareModalProps } = useModal();

    const [loading, setLoading] = useState(false)

    if (!isOpen || !shareModalProps) {
        return null;
    }

    const { conversationId } = shareModalProps;
    const isModalOpen = isOpen && type === "shareModal";

    const copyShareLink = async () => {
        setLoading(true);
        try {
            const response = await createShareLink(conversationId);
            if (response) {
                setLoading(false);
                //@ts-ignore
                console.log(response.id);
                onClose();
                toast.success('Copied conversation URL to clipboard!')
            }
        } catch (error) {
            console.error("Error occurred while creating and copying share link:", error);
            setLoading(false);
            onClose();
        }
    }


    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[95%] md:max-w-[550px] max-h-[95%] md:max-h-[900px] px-0">
                <DialogHeader className="flex px-5 mt-2 mb-3">
                    <DialogTitle className="font-semibold text-black dark:text-white">Share link to Chat</DialogTitle>
                </DialogHeader>
                <div className="h-[65%] md:h-full">
                    <div className="h-[1px] bg-neutral-200 dark:bg-neutral-600"/>
                    <div className="px-6 mt-6">
                        <p className="text-neutral-400">Messages you send after creating your link won&apos;t be shared. Anyone with the URL will be able to view the shared chat.</p>
                    </div>

                    <div className="w-full h-[350px] mt-5 flex items-center px-6">
                        <ChatsCard currentUser={currentUser} conversationId={conversationId}/>
                    </div>
                    <div className="w-full items-start flex px-6 justify-between mt-5">
                        <p className="text-neutral-400">More Info</p>
                        <Button 
                            className="flex items-center gap-2 p-4"
                            onClick={copyShareLink}
                            disabled={loading}
                        >
                            <Link size={18}/>
                            Share Link
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}