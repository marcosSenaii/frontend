import "./TransactionTable.css"

const TransactionTable = () => {
  return (
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
          <td className="transaction-body-cell">
            Aluguel do Your Early-Moring
          </td>
          <td className="transaction-body-cell">1000</td>
          <td className="transaction-body-cell">Entrada</td>
          <td className="transaction-body-cell">
            <button className="edit-button">Editar</button>
            <button className="delete-button">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionTable;
