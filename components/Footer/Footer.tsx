import classes from "./Footer.module.css";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <div className={classes['footer-wrap']}>
            <FooterTop />
            <FooterBottom />
        </div>
    )
}

export default Footer;