import React from "react";
import classes from "./Section.module.css";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className={classes.section}>
      <div className="container">
        <div className={classes["section-content"]}>
          <h2 className="h2">{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
