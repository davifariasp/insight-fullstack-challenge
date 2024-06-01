"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Provider from "../models/ProviderModel";
import FormRegister from "../components/form_register";
import FormEdit from "../components/form_edit";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import Header from "./header";

export default function Home() {
  const [providers, setProviders] = useState<Provider[]>([]);

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
  }

  useEffect(() => {
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

  return (
    <>
      <Header />
      <div className="flex flex-1 bg-insight-blue justify-center h-screen">
        <div className="flex-col my-16 space-y-4">
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
          <div className="">
            <table className="text-sm text-left rounded-lg overflow-hidden shadow-xl">
              <thead className="rounded-t-lg">
                <tr className="bg-insight-dark-blue h-16 text-insight-white">
                  <th scope="col" className="px-6 py-3">
                    Nome
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contato
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tipo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descrição
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-insight-grey-light rounded-b-lg">
                {providers.map((provider, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4">{provider.name}</td>
                      <td className="px-6 py-4">{provider.contact}</td>
                      <td className="px-6 py-4">{provider.type}</td>
                      <td className="px-6 py-4">{provider.additionalInfo}</td>
                      <td className="px-6 py-4 space-x-4">
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
                  );
                })}
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
    </>
  );
}
