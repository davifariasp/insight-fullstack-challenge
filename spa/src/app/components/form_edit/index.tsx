import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

interface FormModalProps {
  id: Number;
  isOpen: boolean;
  onClose: () => void;
}

const FormEdit: React.FC<FormModalProps> = ({ id, isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/provider?id=${id}`)
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

  const handleSubimit = (e: FormEvent) => {
    e.preventDefault();

    axios
      .put(`${process.env.NEXT_PUBLIC_URL_API}/provider?id=${id}`, {
        name: name,
        contact: contact,
        type: type,
        additionalInfo: additionalInfo,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <form className="space-y-4" onSubmit={handleSubimit}>
          <h1 className="text-xl font-bold">Fornecedor</h1>
          <div>
            <label>Nome:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Contato:</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div>
            <label>Tipo:</label>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
          </div>
          <div>
            <label>Descrição:</label>
                      <input
                          value={additionalInfo}
              type="text"
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>
          <input
            className="bg-green-500 text-white py-2 px-4 rounded"
            type="submit"
            value="Enviar"
          />
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormEdit;
