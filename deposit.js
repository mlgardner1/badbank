function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [balance, setBalance]   = React.useState('100');
  const [deposit, setDeposit]   = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext);  

  const validate = amount => {
      if (amount < 0) {
        setStatus('Error: Cannot deposit a negative amount');
        return false;
      }
      if (amount != Number) {
        setStatus('Error: Please enter a valid number');
        return false;
      }
      return true;
  }

  const depositMoney = amount => {
    if(!validate(amount)) return;
    setBalance(Number(balance) + Number(amount));
    setShow(false)
    setStatus('');
    ctx.users.push(Number(balance) + Number(amount));
  }

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  React.useEffect(() => {
    if (!deposit) {
      setDisabled(true);
    }
    else {
      setDisabled(false);
    }
  }, [deposit]);

  return (
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
            <div>
           <h5>Balance: ${balance}</h5>
            </div>
              Deposit Amount<br/>
              <input  type="deposit" 
                      className="form-control" 
                      id="deposit" placeholder="$0.00" 
                      value={deposit} 
                      onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" 
                      className="btn btn-light" 
                      onClick={()=> depositMoney(deposit)} 
                      disabled={disabled}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" 
                      className="btn btn-light" 
                      onClick={clearForm}>Make another deposit</button>
              </>
            )}
    />
  )
}
// function CreateAccount(){
  //const ctx = React.useContext(UserContext);
  //
  //function handle(data){
    //ctx.users.push({name:data.name,email:data.email,password:data.password,balance:100});
    //return true;
  //}
  //return(
    //<BankForm
      //bgcolor="primary"
      //label="Create Account"
      //handle={handle}
      //hideAmount={true}
      //successButton="Add another account"
      // />
  //)
//}*/