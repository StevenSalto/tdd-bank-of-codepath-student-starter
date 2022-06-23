import axios from "axios";
import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"

export default function Home({transactions, setTransactions, transfers, setTransfers, error, setError, isLoading, setIsLoading, filterInputValue}) {
  let filteredTransactions = [];
  React.useEffect(() => {
    setIsLoading(true);
    try {setTransactions(axios.get("http://localhost:3001/bank/transactions"))}catch(err){setError(err)};
    try {setTransfers(axios.get("http://localhost:3001/bank/transfers"))}catch(err){setError(err)};
    setIsLoading(false);
  }, []);

  console.log(transactions)
  function Loading() {
    if(isLoading) {
      return (
        <h1 className="wrapper">
          Loading...
        </h1>
      )
    } else {
      return (
        <h1 className="wrapper">
          <BankActivity transactions={filteredTransactions}/>
        </h1>
      )
    }
  }

  function Error() {
    if(error!=""){return(
      <h2>

      </h2>
    )}else{
    return(
      <h2 className="error">
        errororor
      </h2>
    )}
  }

  function filter() {
    if(filterInputValue != "") {
      filteredTransactions = transactions.map((trans) => {trans.includes});
    } else {
      return transactions;
    }
  }

  return (
    <div className="home">
      <AddTransaction />
      <Loading />
    </div>
  )
}
