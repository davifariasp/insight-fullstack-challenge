import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Loading from "../loading";

interface FormModalProps {
  id: Number;
  isOpen: boolean;
  onClose: () => void;
  getProviders: () => void;
}

export default function FormEdit(props: FormModalProps) {
  if (!props.isOpen) return null;

  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/provider?id=${props.id}`)
      .then((response) => {
        setName(response.data.name);
        setContact(response.data.contact);
        setType(response.data.type);
        setAdditionalInfo(response.data.additionalInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleSubimit (e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      axios
        .put(`${process.env.NEXT_PUBLIC_URL_API}/provider?id=${props.id}`, {
          name: name,
          contact: contact,
          type: type,
          additionalInfo: additionalInfo,
        })
        .then((response) => {
          setIsLoading(false);
          console.log(response);
          props.onClose();
          props.getProviders();
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    }, 1000);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="flex items-center justify-center w-[435px] h-[487px] bg-insight-dark-blue rounded-2xl shadow-2xl">
          <div className="space-y-8">
            <div className="flex flex-col justify-end items-end">
              <button>
                <XMarkIcon className="text-white h-6" onClick={props.onClose} />
              </button>

              <p className="mx-auto text-center text-2xl font-bold text-insight-white ">
                Editar Fornecedor
              </p>
            </div>

            <form className="w-[350px] space-y-4" onSubmit={handleSubimit}>
              <div className="bg-neutral-100 rounded-full flex flex-row px-4 py-2 items-center">
              <label className="text-insight-dark-blue text-sm">Nome:</label>
                <input
                  className="bg-inherit w-full px-4 py-1 focus:outline-none "
                  value={name}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome"
                />
              </div>

              <div className="bg-neutral-100 rounded-full flex flex-row px-4 py-2 items-center">
              <label className="text-insight-dark-blue text-sm">Contato:</label>
                <input
                  className="bg-inherit w-full px-4 py-1 focus:outline-none "
                  value={contact}
                  type="text"
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Contato"
                />
              </div>

              <div className="bg-neutral-100 rounded-full flex flex-row px-4 py-2 items-center">
              <label className="text-insight-dark-blue text-sm">Tipo:</label>
                <input
                  className="bg-inherit w-full px-4 py-1 focus:outline-none "
                  value={type}
                  type="text"
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Tipo"
                />
              </div>

              <div className="bg-neutral-100 rounded-full flex flex-row px-4 py-2 items-center">
              <label className="text-insight-dark-blue text-sm">Descrição:</label>
                <input
                  className="bg-inherit w-full px-4 py-1 focus:outline-none "
                  value={additionalInfo}
                  type="text"
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Descrição"
                />
              </div>

              <button className="flex justify-center w-full bg-insight-button-blue text-white py-2 px-4 rounded-full">
                {isLoading ? <Loading /> : "Atualizar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
