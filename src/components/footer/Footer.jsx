import "./Footer.css";

const Footer = () => {

  const sinan = "<Sinan/>";
  return (
    <div>
      <div className="footer-div">
        {sinan}
        <img
          src="../../assets/home.jpeg"
          alt=""
          width={"200px"}
        />
        copyright2022
      </div>
    </div>
  );
};

export default Footer;
