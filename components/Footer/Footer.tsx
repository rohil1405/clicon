import classes from "./Footer.module.css";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

export default function Footer() {
    return (
        <div className={classes['footer-wrap']}>
            <FooterTop />
            <FooterBottom />
        </div>
    )
}