import { Button } from "@/components/retroui/Button"
import { Drawer } from "@/components/retroui/Drawer"
import { Menu } from "lucide-react"
import { useTranslation } from "react-i18next"

export function SideDrawer() {

    const { t } = useTranslation()

    return (
        <div className="ml-1 mt-1">
            <Drawer direction="left">
                <Drawer.Trigger>
                    <Button size={"icon"}><Menu /></Button>
                </Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Header>
                    </Drawer.Header>
                    <Drawer.Footer>
                    <p>{t('credits')}</p>
                    </Drawer.Footer>
                </Drawer.Content>
            </Drawer>
        </div>
    )
}