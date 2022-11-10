function Home(){
  return (
    <Card
      bgcolor="success"
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to BadBank"
      text="For all your banking needs."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
