import "../../../assets/styles/Footer.css";
import FooterContent from "./FooterContent";
import FooterRights from "./FooterRights";
import SocialInfo from "../../others/SocialInfo";

function Footer() {
    return (
        <footer className="footer">
            <FooterContent />
            <SocialInfo />
            <FooterRights />
        </footer>
    )
}

export default Footer