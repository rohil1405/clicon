import classes from "./SectionHeader.module.css";
import Image from "next/image";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className={classes.header}>
      <div className="container">
        <ul>
          <li>
            <Link href="/" className={classes.link}>
              <Image
                src="/images/House.svg"
                width={20}
                height={20}
                alt="home"
              />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/products" className={classes.link}>
              Shop
            </Link>
          </li>
          <li className={classes.active}>{title}</li>
        </ul>
      </div>
    </div>
  );
};

export default SectionHeader;
