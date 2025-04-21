import { useChannelSettings } from "../../shared/hooks";
import { ChannelSettings } from "../channel/ChannelSettings";
import { LoadingSpinner } from "../LoadingSpinner";
import { StreamKey } from "./StreamKey";
import { PasswordSettings } from "./PasswordSettings"

export const Setting = () => {
    const {channelSettings, isFetching, saveSettings } = useChannelSettings();

    if (isFetching) {
        return <LoadingSpinner/>
    }

    return(
        <div className="Setting-container">
            <span>Settings</span>
            <ChannelSettings Settings={ channelSettings } saveSetting={saveSettings}/>
            <PasswordSettings />
            <StreamKey streamKey={channelSettings.streamKey}/>
        </div>
    )
}