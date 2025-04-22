import { Route, Routes } from "react-router-dom";
import { Channels } from "../channel/Channels";
import { Setting } from "../settings/Settings";
import { ChannelView } from "../channel/ChannelView";

export const Content = ({ channels, getChannels }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="channels" element={<Channels channels={channels}/>}/>
                <Route path="settings" element={<Setting/>}/>
                <Route path="channel/:id" element={<ChannelView getChannels={getChannels}/>}/>
            </Routes>
        </div>
    )
}