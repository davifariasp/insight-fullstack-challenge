import axios from "axios";
import { FormEvent, useState } from "react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormRegister: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const [name, setName] = useState<string>('')
  const [contact, setContact] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [additionalInfo, setAdditionalInfo] = useState<string>('')

  const handleSubimit = (e: FormEvent) => {
    e.preventDefault();
  

    axios
      .post(`${process.env.NEXT_PUBLIC_URL_API}/provider`, {
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
            <input type="text" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label>Contato:</label>
            <input type="text" onChange={(e) => setContact(e.target.value)}/>
          </div>
          <div>
            <label>Tipo:</label>
            <input type="text" onChange={(e) => setType(e.target.value)}/>
          </div>
          <div>
            <label>Descrição:</label>
            <input type="text" onChange={(e) => setAdditionalInfo(e.target.value)}/>
          </div>
          <input className="bg-green-500 text-white py-2 px-4 rounded" type="submit" value="Enviar" />
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
}

export default FormRegister
