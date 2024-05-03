import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"

export const ChatSectionHeader = () => {
   return (
        <div className="rounded-lg p-2 dark:hover:bg-[#212121] hover:bg-[#ececec] cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-1">
                        <p className="font-semibold text-lg text-black dark:text-white">
                            ChatGPT <span className="opacity-45">3.5</span>
                        </p>
                        <ChevronDown size={20} className="opacity-45 text-black dark:text-white"/>
                    </div>
                    
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent className="w-[25vw] mt-3" align="start">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent> */}
            </DropdownMenu>
        </div>
   ) 
}