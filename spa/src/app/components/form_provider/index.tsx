interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormProvider: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        <form className="space-y-4">
          <h1 className="text-xl font-bold">Fornecedor</h1>
          <div>
            <label>Nome:</label>
            <input type="text" />
          </div>
          <div>
            <label>Contato:</label>
            <input type="text" />
          </div>
          <div>
            <label>Tipo:</label>
            <input type="text" />
          </div>
          <div>
            <label>Descrição:</label>
            <input type="text" />
          </div>
          <input type="submit" value="Enviar" />
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

export default FormProvider
