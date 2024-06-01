"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Provider from "../models/ProviderModel";
import FormRegister from "../components/form_register";
import FormEdit from "../components/form_edit";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import Header from "./header";
import Unauthorized from "./unauthorized";

export default function Home() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [auth, setAuth] = useState<String | null>("");

  const [id, setId] = useState<Number>(0);

  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const getProviders = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/provider/all`)
      .then((response) => {
        const newProviders: Provider[] = [];

        response.data.map((provider: Provider) => {
          const newProvider: Provider = new Provider(
            provider.id,
            provider.name,
            provider.contact,
            provider.type,
            provider.additionalInfo
          );
          newProviders.push(newProvider);
        });

        setProviders(newProviders);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setAuth(localStorage.getItem("token"));
    getProviders();
  }, []);

  const handleCloseModalCreate = () => {
    setIsModalCreateOpen(false);
  };

  const handleCloseModalEdit = () => {
    setIsModalEditOpen(false);
  };

  const handleRemove = (id: Number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL_API}/provider?id=${id}`)
      .then((response) => {
        console.log(response);
        getProviders();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (auth === null) {
    return (
      <>
        <Unauthorized />
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col h-screen w-screen">
          <Header />

          <div className="flex flex-1 bg-insight-blue justify-center">
            <div className="w-[26rem] md:w-[700px] items-start flex-col my-16 space-y-4">
              <div className="flex space-x-2 items-center">
                <h1 className="text-3xl font-bold text-insight-white">
                  FORNECEDORES
                </h1>
                <button
                  className="bg-insight-button-blue text-white w-[40px] h-[40px] text-2xl font-bold rounded-full"
                  onClick={(e) => setIsModalCreateOpen(true)}
                >
                  +
                </button>
              </div>
              <div className="h-[700px] overflow-y-scroll rounded-lg">
                <table className="w-48 md:w-full text-sm text-left overflow-hidden shadow-xl">
                  <thead className="bg-insight-dark-blue h-16">
                    <tr className="text-insight-white">
                      <th
                        scope="col"
                        className="px-3 py-1 md:px-6 md:py-3 rounded-tl-lg"
                      >
                        Nome
                      </th>
                      <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
                        Contato
                      </th>
                      <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
                        Tipo
                      </th>
                      <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
                        Descrição
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-1 md:px-6 md:py-3 rounded-tr-lg"
                      >
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-insight-grey-light">
                    {providers.map((provider, index) => (
                      <tr
                        key={index}
                        className={
                          index === providers.length - 1
                            ? "rounded-bl-lg rounded-br-lg"
                            : ""
                        }
                      >
                        <td
                          className={`px-3 py-2 md:px-6 md:py-4 ${
                            index === providers.length - 1
                              ? "rounded-bl-lg"
                              : ""
                          }`}
                        >
                          {provider.name}
                        </td>
                        <td className="px-3 py-2 md:px-6 md:py-4">
                          {provider.contact}
                        </td>
                        <td className="px-3 py-2 md:px-6 md:py-4">
                          {provider.type}
                        </td>
                        <td className="px-3 py-2 md:px-6 md:py-4">
                          {provider.additionalInfo}
                        </td>
                        <td
                          className={`py-2 md:px-6 md:py-4 space-x-2 md:space-x-4 ${
                            index === providers.length - 1
                              ? "rounded-br-lg"
                              : ""
                          }`}
                        >
                          <button
                            onClick={() => {
                              setId(provider.id);
                              setIsModalEditOpen(true);
                            }}
                          >
                            <PencilIcon className="w-6 p-1 bg-insight-icon-blue text-white rounded-lg" />
                          </button>
                          <button onClick={() => handleRemove(provider.id)}>
                            <TrashIcon className="w-6 p-1 bg-insight-icon-blue text-white rounded-lg" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {isModalCreateOpen ? (
                  <FormRegister
                    isOpen={isModalCreateOpen}
                    onClose={handleCloseModalCreate}
                    getProviders={getProviders}
                  />
                ) : (
                  <></>
                )}

                {isModalEditOpen ? (
                  <FormEdit
                    id={id}
                    isOpen={isModalEditOpen}
                    onClose={handleCloseModalEdit}
                    getProviders={getProviders}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
