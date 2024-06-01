import Image from "next/image";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import logoInsightLab from "../../assets/logo-insight.png";
import {useRouter} from 'next/navigation'

export default function Header() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem("token");
        router.push("/");
    }

    return (
        <>
            <header className="flex items-center justify-between w-screen h-16 px-4 bg-insight-dark-blue">
                <Image src={logoInsightLab} alt="Logo Insight Lab" height="40" />
                <button onClick={handleLogout} className="flex text-insight-white space-x-1">
                    <ArrowLeftStartOnRectangleIcon className="h-5 w-5 " />
                    <p>Sair</p>
                </button>
        </header>
        </>
    );
}