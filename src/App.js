// import logo from './logo.svg';
import "./App.css";
import Message from "./Message";

 


function App() {

  const cardDetails = [
  {
  planName :"Free",
  price :"0",
  features : [
    {
      name :"single user",
      enable : true

    },
    {
      name :"50 GB storage",
      enable : true

    },
    {
      name :"Unlimited Public Projects",
      enable : false

    },
    {
      name :"Community acess",
      enable : false
    },
    {
      name :"Unlimited Private Projects",
      enable : false

    },
    {
      name :"Deticated Phone Support",
      enable : false

    },
    {
      name :"Free subdomine",
      enable : false

    },
    {
      name :"Monthly status report",
      enable : false

    },
  ]

},
{
  planName :"Pro",
  price :"9",
  features : [
    {
      name :"5 users",
      enable : true

    },
    {
      name :"50 GB storage",
      enable : true

    },
    {
      name :"Unlimited Public Projects",
      enable : true

    },
    {
      name :"Community acess",
      enable : true
    },
    {
      name :"Unlimited Private Projects",
      enable : false

    },
    {
      name :"Deticated Phone Support",
      enable : false

    },
    {
      name :"Free subdomine",
      enable : false

    },
    {
      name :"Monthly status report",
      enable : false

    },
  ]
},
{
  planName :"Plus",
  price :"49",
  features : [
    {
      name :"single user",
      enable : true

    },
    {
      name :"50 GB storage",
      enable : true

    },
    {
      name :"Unlimited Public Projects",
      enable : true

    },
    {
      name :"Community acess",
      enable : true
    },
    {
      name :"Unlimited Private Projects",
      enable : true

    },
    {
      name :"Deticated Phone Support",
      enable : true

    },
    {
      name :"Free subdomine",
      enable : true

    },
    {
      name :"Monthly status report",
      enable : true

    },
  ]
}
  ]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
        {
          cardDetails.map((detail) => {
            return <Message details={detail}></Message>

          })
        }
          
          
        </div>
      </div>
    </section>
  );
}

export default App;
