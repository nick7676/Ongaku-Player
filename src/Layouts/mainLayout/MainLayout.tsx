import { invoke } from "@tauri-apps/api/core";
import { useEffect } from "react";
import { SideDrawer } from "./Components/Drawer";

export default function MainLayout() {
    useEffect(() => {
        invoke<string>("get_username").then((u) => console.log(u));
    }, []);
    return (
        <div>

            <SideDrawer />
        </div>
    )
}