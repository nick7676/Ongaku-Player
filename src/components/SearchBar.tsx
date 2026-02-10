import { invoke } from "@tauri-apps/api/core";
import { Button } from "./retroui/Button";
import { Input } from "./retroui/Input";
import { Label } from "./retroui/Label";
import { useState } from "react";

interface SearchBarProps {
    icon?: React.ReactNode
}
interface VideoOption {
    id: String;
    label: String;
}

export default function SearchBar({ icon }: SearchBarProps) {
    const [link, setLink] = useState("");
    const [options, setOptions] = useState<VideoOption[]>([]);
    const [loading, setLoading] = useState(false);

    const sendLink = async () => {
        if (!link) return;
        setLoading(true);
        try {
            const data = await invoke<VideoOption[]>('get_options', { url: link });
            setOptions(data);
        } catch (error) {
            console.error("Errore nel recupero opzioni:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <Label htmlFor="welcome">Insert a link</Label>
                <div className="flex items-center gap-2">
                    <Input 
                        id="welcome"
                        type="text" 
                        placeholder={loading ? "Analyzing..." : "Let's download something..."}
                        onChange={(e) => setLink(e.target.value)}
                        disabled={loading}
                    />
                    <Button size={"icon"} onClick={sendLink} disabled={loading}>
                        {icon}
                    </Button>
                </div>
            </div>

            {options.length > 0 && (
                <div className="grid grid-cols-1 gap-2 mt-4 max-h-60 overflow-y-auto p-2 border rounded-md border-zinc-800">
                    <p className="text-sm font-bold">Select format:</p>
                    {options.map((opt) => (
                        <div key={opt.id.toString()} className="flex justify-between items-center bg-zinc-900 p-2 rounded">
                            <span className="text-sm">{opt.label}</span>
                            <Button 
                                size="sm" 
                                onClick={() => console.log("Scarico ID:", opt.id)}
                            >
                                Download
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}