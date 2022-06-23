import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import "./App.css"

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);
  const [transfers, setTransfers] = React.useState([]);
  const [error, setError] = React.useState("");
  const [filterInputValue, setFilterInputValue] = React.useState("");


  return (
    <div className="app">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue}/>
        <main>
          <Routes>
            <Route to="/" element={<Home transactions={transactions} setTransactions={setTransactions} transfers={transfers} setTransfers={setTransfers} error={error} setError={setError} isLoading={isLoading} setIsLoading={setIsLoading} filterInputValue={filterInputValue}/>}/>
            <Route to="/transactions/:transactionId" element={<TransactionDetail />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
