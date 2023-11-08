function Message({details}){
    return <><div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{details.planName}</h5>
        <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
        <hr></hr>
        <ul className="fa-ul">
          {details.features.map((feature)=>{
            return(
              <li className={
                feature.enable ? ("") : ("text-decoration-line-through")
              }
              >
              {feature.name}

              </li>
            );
          })}
        </ul>
        <div className="d-grid">
          <a href="b" className="btn btn-primary text-uppercase">Button</a>
        </div>
        </div>
      </div>
    </div>
  </>
  
}


export default Message;