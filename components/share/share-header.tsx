import { Conversation } from "@prisma/client";

interface conversation{
    conversation: Conversation;
}

const ShareHeader = ({
    conversation
} : conversation) => {

    return ( 
        <div>
            {conversation.title}
        </div>
     );
}
 
export default ShareHeader;