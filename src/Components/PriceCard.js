import { FaCalendarAlt, FaFileAlt, FaLightbulb, FaStar, FaImage, FaPaperPlane } from "react-icons/fa";


function PriceCard({plan,price,upgradePrice}){
      const info = [
    { icon: <FaCalendarAlt color="#2ecc71" />, text: "Learn at your own pace" },
    { icon: <FaFileAlt color="#2ecc71" />, text: "Learn at your own pace" },
    { icon: <FaLightbulb color="#2ecc71" />, text: "Learn at your own pace" },
    { icon: <FaStar color="#2ecc71" />, text: "Learn at your own pace" },
    { icon: <FaImage color="#2ecc71" />, text: "Learn at your own pace" },
    { icon: <FaPaperPlane color="#2ecc71" />, text: "Learn at your own pace" },
  ];
    return(
        <section className="price-card-container">
          <div className="price-card-head">
            <h2>{plan}</h2>
            <h1>{price}</h1>
            <div>/Month</div>
            <div  className="upgrade">{upgradePrice}</div>
          </div>

          <hr/>
          
       <ul className="price-card-info">
        {info.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>

      <button className="btn3"> Start Now</button>
     

        </section>
    );
}export default PriceCard;