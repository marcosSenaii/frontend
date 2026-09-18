import "./App.css";
import { Header } from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionTable from "./components/TransactionTable/TransactionTable";

function App() {
  return (
    <main>
      <Header />

      <Summary />

      <TransactionForm />

      <TransactionTable />
    </main>
  );
}

export default App;
