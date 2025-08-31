import SectionBg from "../Assets/Images/section-bg.png"; // your fixed background image

function HeaderSection({ pageName }) {
 

  return (
    <section className="header-section" style={{backgroundImage: `url(${SectionBg})`,}}>
      <h2>{pageName}</h2>
      <div className="header-subtitle">
        <a href="#">Home</a> / {pageName}
      </div>
    </section>
  );
}

export default HeaderSection;
