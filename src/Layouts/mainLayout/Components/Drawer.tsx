import { Button } from "@/components/retroui/Button"
import { Drawer } from "@/components/retroui/Drawer"
import { Menu } from "lucide-react"

export function SideDrawer() {
    return (
        <div className="ml-1 mt-1">
            <Drawer direction="left">
                <Drawer.Trigger>
                    <Button size={"icon"}><Menu /></Button>
                </Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Edit Profile</Drawer.Title>
                        <Drawer.Description>Make changes to your profile here. Click save when you're done.</Drawer.Description>
                    </Drawer.Header>
                </Drawer.Content>
            </Drawer>
        </div>
    )
}