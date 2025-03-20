import "../styles/Footer.css";
function Footer() {
  return (
    <>
      <div id="footer">
        <div id="footer-card">
          <a
            id="api-link"
            href="https://gadhagod.github.io/Hyrule-Compendium-API/#/"
            target="_blank"
          >
            Hyrule Compendium API by Aarav Borthakur
          </a>
          <a
            id="github-link"
            href="https://github.com/mrhl082024"
            target="_blank"
          >
            My Github:
            <img
              id="git-img"
              src="/public/images/github-mark-white.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
