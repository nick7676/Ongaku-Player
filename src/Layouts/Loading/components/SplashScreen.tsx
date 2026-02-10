import { Loader } from "@/components/retroui/Loader";
import LoadingTitle from "../ui/LoadingTitle";

export default function SplashScreen() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6">
            <LoadingTitle />
            <Loader size="lg" delayStep={80} count={6} />
        </div>
    );
}
