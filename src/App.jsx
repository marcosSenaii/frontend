import "./App.css";

function App() {
  return (
    <main>
      <header>
        <h1 className="app-title">Your belly</h1>
      </header>

      <div className="summary">
        <div className="box">
          Saldo: <span>R$ 10.000,00</span>
        </div>
      </div>

      <form action="">
        <input 
          type="text"
          placeholder="Descrição"
          required
        />

        <input 
          type="number"
          placeholder="Valor"
          step="0.01"
          required
        />

        <select required>
          <option value="">Selecione</option>
          <option value="">Entrada</option>
          <option value="">Saída</option>
        </select>

        <div className="form-actions">
          <button type="submit">Salvar</button>
        </div>
      </form>

      <table className="transactions">
        <thead className="transaction-head">
          <tr className="transaction-header-row">
            <th className="transaction-header-cell">Descrição</th>
            <th className="transaction-header-cell">Valor</th>
            <th className="transaction-header-cell">Tipo</th>
            <th className="transaction-header-cell">Ações</th>
          </tr>
        </thead>
        <tbody className="transaction-body">
          <tr className="transaction-body-row">
            <td className="transaction-body-cell">Salário</td>
            <td className="transaction-body-cell">600</td>
            <td className="transaction-body-cell">Entrada</td>
            <td className="transaction-body-cell">
              <button className="edit-button">Editar</button>
              <button className="delete-button">Excluir</button>
            </td>
          </tr>

          <tr className="transaction-body-row">
            <td className="transaction-body-cell">Conta de Luz</td>
            <td className="transaction-body-cell">220</td>
            <td className="transaction-body-cell">Saída</td>
            <td className="transaction-body-cell">
              <button className="edit-button">Editar</button>
              <button className="delete-button">Excluir</button>
            </td>
          </tr>

          <tr className="transaction-body-row">
            <td className="transaction-body-cell">Aluguel do Your Early-Moring</td>
            <td className="transaction-body-cell">1000</td>
            <td className="transaction-body-cell">Entrada</td>
            <td className="transaction-body-cell">
              <button className="edit-button">Editar</button>
              <button className="delete-button">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default App;
