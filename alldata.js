
function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
   <h1>All Data</h1>
    {/* {JSON.stringify(ctx)}<br/> */}
      
    <table class="table">``
  <thead>
    <tr>
      <th scope="col">User</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
        {ctx.users.map((user) => {
                    return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.balance}</td>
          </tr>
                    )
        })}
        </tbody>
</table>
    </>
  );
}