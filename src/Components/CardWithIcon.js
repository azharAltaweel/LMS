function CardWithIcon({data}){
return(
       <div className="icon-cards-container">
        {data.map((item, index) => (
          <div className="icon-card" key={index}>
            <div className="icon-card-icon">{item.icon}</div>
            <div className="icon-card-text">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
);
}export default CardWithIcon;