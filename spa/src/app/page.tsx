"use client";

import logoInsightLab from "./assets/logo-insight.png";
import { UserIcon, KeyIcon, EyeIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "./components/loading";

export default function Login() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [typePass, setTypePass] = useState("password");

  const [isLoading, setIsLoading] = useState(false);

  function handleTypePass() {
    setTypePass(typePass === "password" ? "text" : "password");
  }

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      router.push("/home");
    }, 2000);
  };

  return (
    <>
      <div className="w-screen h-screen bg-insight-blue flex justify-center items-center">
        <div className="flex w-[435px] h-[428px] items-center justify-center bg-insight-dark-blue rounded-2xl shadow-lg">
          <div className="w-[300px] flex-col items-center mx-auto justify-center space-y-2">
            <Image src={logoInsightLab} alt="Logo Insight Lab" height="100" />
            <p className="mx-auto text-center text-4 text-insight-white ">
              Para entrar, insira e-mail e senha.
            </p>

            <form className="space-y-4" onSubmit={(e) => handleSignIn(e)}>
              <div className="bg-neutral-100 rounded-full flex flex-row px-4 py-2 items-center">
                <UserIcon className="h-5 w-5 text-blue-500" />
                <input
                  className="bg-inherit w-full px-4 py-1 focus:outline-none "
                  type="text"
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="E-mail"
                />
              </div>

              <div className="bg-neutral-100 rounded-full flex flex-row px-4 py-2 items-center justify-between">
                <KeyIcon className="h-5 w-5 text-insight-icon-blue" />
                <input
                  className="bg-inherit w-full px-4 py-1 focus:outline-none"
                  type={typePass}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                />
                <EyeIcon
                  className="h-5 w-5 text-insight-icon-blue hover:cursor-pointer"
                  onClick={handleTypePass}
                />
              </div>

              <button className="flex justify-center w-full bg-insight-button-blue text-white py-2 px-4 rounded-full">
                {isLoading ? <Loading /> : "Entrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
