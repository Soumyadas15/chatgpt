import { Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface SidebarUserProps{
    currentUser: any;
}
export const SidebarUser = ({
    currentUser,
} : SidebarUserProps) => {
    return (
        <div className="w-full h-full px-2 py-2 flex items-center gap-2 rounded-md dark:hover:bg-[#212121] hover:bg-[#ececec] cursor-pointer">
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="text-sm">{currentUser.name}</p>
        </div>
    )
}