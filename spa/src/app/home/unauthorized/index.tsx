import { useRouter } from "next/navigation";
import logoInsightLab from "../../assets/logo-insight.png";
import Image from "next/image";

export default function Unauthorized() {
  const router = useRouter();

  return (
    <html lang="pt-BR">
      <body className="h-screen w-screen flex flex-col justify-center items-center bg-insight-dark-blue space-y-4">
        <Image src={logoInsightLab} alt="Logo Insight Lab" height="50" />
        <h1 className="text-2xl font-bold text-insight-white">
          Usuário não autenticado!
        </h1>
        <button
          className="bg-insight-button-blue text-insight-white rounded-full  px-4 py-2"
          onClick={() => router.push("/")}
        >
          Ir para login
        </button>
      </body>
    </html>
  );
}
