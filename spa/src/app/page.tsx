"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Provider from "../app/models/ProviderModel";
import FormProvider from "./components/form_provider";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const [providers, setProviders] = useState<Provider[]>([]);

  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/provider/all")
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
  }, []);

  const handleOpenModal = () => {
    setIsModalCreateOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalCreateOpen(false);
  };


  return (
    <div className="flex-col bg-slate-500 h-screen">
      <div className="flex space-x-2 justify-center">
        <h1 className="text-3xl font-bold">Lista de Fornecedores</h1>
        <button
          className="bg-green-500 text-white py-1 px-4 rounded-xl"
          onClick={(e) => setIsModalCreateOpen(true)}
        >
          Adicionar
        </button>
      </div>
      <div className="flex justify-center">
        <table className="text-sm text-left">
          <thead>
            <tr>
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
          <tbody>
            {providers.map((provider, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-4">{provider.name}</td>
                  <td className="px-6 py-4">{provider.contact}</td>
                  <td className="px-6 py-4">{provider.type}</td>
                  <td className="px-6 py-4">{provider.additionalInfo}</td>
                  <td className="px-6 py-4 space-x-4">
                    <button>
                      <PencilIcon className="w-6 p-1 bg-yellow-400 text-white rounded-lg" />
                    </button>
                    <button>
                      <TrashIcon className="w-6 p-1 bg-red-400 text-white rounded-lg" />{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {isModalCreateOpen ? <FormProvider isOpen={isModalCreateOpen} onClose={handleCloseModal} /> : <></>}
      </div>
    </div>
  );
}
