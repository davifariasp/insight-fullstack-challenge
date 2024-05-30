function FormProvider() {
  return (
    <>
      <div>
        <form>
          <span>
            <label>Nome:</label>
            <input type="text" />
          </span>
          <span>
            <label>Contato:</label>
            <input type="text" />
          </span>
          <span>
            <label>Tipo:</label>
            <input type="text" />
          </span>
          <span>
            <label>Descrição:</label>
            <input type="text" />
          </span>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
}

export default FormProvider;
