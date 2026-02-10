import Shuffle from "@/components/Shuffle";
import { useTranslation } from "react-i18next";

export default function LoadingTitle() {
    const { t } = useTranslation("loading");

    return (
        <h1 className="text-7xl font-head inline-flex items-baseline gap-0">
            <span>{t("mainTitle")}</span>
            <Shuffle
                text="..."
                loop
                duration={1}
                stagger={0.2}
                className="text-7xl font-head"
            />
        </h1>
    );
}
