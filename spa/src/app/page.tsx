"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Provider from "../app/models/ProviderModel";
import FormRegister from "./components/form_register";
import FormEdit from "./components/form_edit";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const [providers, setProviders] = useState<Provider[]>([]);

  const [id, setId] = useState<Number>(0);

  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  const handleOpenModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  const handleCloseModalCreate = () => {
    setIsModalCreateOpen(false);
  };

  const handleOpenModalEdit = () => {
    setIsModalEditOpen(true);
  };

  const handleCloseModalEdit = () => {
    setIsModalEditOpen(false);
  };

  const handleRemove = (id: Number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL_API}/provider?id=${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
                    <button onClick={() => {
                      setId(provider.id);
                      setIsModalEditOpen(true);
                    }
                    }>
                      <PencilIcon className="w-6 p-1 bg-yellow-400 text-white rounded-lg" />
                    </button>
                    <button onClick={() => handleRemove(provider.id)}>
                      <TrashIcon className="w-6 p-1 bg-red-400 text-white rounded-lg" />{" "}
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
          />
        ) : (
          <></>
        )}

        {isModalEditOpen ? (
          <FormEdit id={id} isOpen={isModalEditOpen} onClose={handleCloseModalEdit} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
