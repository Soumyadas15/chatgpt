import getConversationByShareId from "@/actions/get-conversation-by-share-id";
import { ShareContainer } from "@/components/share/share-container";
import ShareHeader from "@/components/share/share-header";

interface IParams{
    shareId?: string;
}

const SharedPage = async ({ 
    params 
}: {
    params: IParams 
}) => {

    const conversation = await getConversationByShareId(params)

    return ( 
        <div className="w-full h-full">
            <ShareContainer>
                <ShareHeader 
                    //@ts-ignore
                    conversation={conversation}
                />
            </ShareContainer>
        </div>
     );
}
 
export default SharedPage;