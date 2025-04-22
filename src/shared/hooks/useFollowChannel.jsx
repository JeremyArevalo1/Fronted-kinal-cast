import toast from "react-hot-toast";
import { followedChannel as followChannelRequest } from "../../services";

export const useFollowChannel = () => {
    
    const followChannel = async (channelId, onSuccess) => {

        const responseData = await followChannelRequest(channelId);

        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'Ocurrio un error al seguir el canal'
            )
        }

        toast.success('channel follow Successfully')
        onSuccess(true)
    }

    return {
        followChannel
    }
}