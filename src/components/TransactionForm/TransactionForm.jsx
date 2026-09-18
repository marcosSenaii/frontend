import "./TransactionForm.css"

const TransactionForm = () => {
  return (
    <form action="">
      <input type="text" placeholder="Descrição" required />

      <input type="number" placeholder="Valor" step="0.01" required />

      <select required>
        <option value="">Selecione</option>
        <option value="">Entrada</option>
        <option value="">Saída</option>
      </select>

      <div className="form-actions">
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
};

export default TransactionForm;
