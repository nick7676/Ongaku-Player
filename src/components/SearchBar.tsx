import { invoke } from "@tauri-apps/api/core";
import { Button } from "./retroui/Button";
import { Input } from "./retroui/Input";
import { Label } from "./retroui/Label";
import { useState } from "react";

interface SearchBarProps {
    icon?: React.ReactNode
}

export default function SearchBar({ icon }: SearchBarProps) {

    const [link, setLink] = useState("")

    const sendLink = async () => {
        await invoke('link_reader', { link: link })
    }

    if (!icon) {
        return (
            <div>
                <Label htmlFor="welcome">Insert a link</Label>
                <Input type="text" placeholder="Let's download something..."></Input>
            </div>
        )
    } else {
        return (
            <div>
                <Label htmlFor="welcome">Insert a link</Label>
                <div className="flex items-center gap-2">
                    <Input type="text" placeholder="Let's download something..." onChange={(e) => setLink(e.target.value)}></Input>
                    <Button size={"icon"} onClick={sendLink}>{icon}</Button>
                </div>
            </div>
        )
    }
}