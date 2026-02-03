import { Button } from "./retroui/Button";
import { Input } from "./retroui/Input";
import { Label } from "./retroui/Label";

interface SearchBarProps {
    icon?: React.ReactNode
}

export default function SearchBar({ icon }: SearchBarProps) {

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
                    <Input type="text" placeholder="Let's download something..."></Input>
                    <Button size={"icon"}>{icon}</Button>
                </div>
            </div>
        )
    }
}