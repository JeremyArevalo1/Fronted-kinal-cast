import { Route, Routes } from "react-router-dom";
import { Channels } from "../channel/Channels";
import { Setting } from "../settings/Settings";

export const Content = ({ channels, getChannels }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="channels" element={<Channels channels={channels}/>}/>
                <Route path="settings" element={<Setting/>}/>
            </Routes>
        </div>
    )
}