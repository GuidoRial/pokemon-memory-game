import GithubLogo from "../img/github-logo.png";
import LinkedinLogo from "../img/linkedin-logo.png";

const Footer = () => {
    const openGithub = function () {
        window.open("https://github.com/GuidoRial", "_blank");
    };

    const openLinkedin = function () {
        window.open(
            "https://www.linkedin.com/in/guido-rial-275552221/",
            "_blank"
        );
    };
    return (
        <div className="footer">
            Created by GuidoRial
            <img className="prof-img"
                src={LinkedinLogo}
                alt="Linkedin Logo"
                onClick={openLinkedin}
            ></img>
            <img className="prof-img" src={GithubLogo} alt="Github Logo" onClick={openGithub}></img>
        </div>
    );
};

export default Footer;
