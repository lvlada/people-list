import React from "react";
import "./IdCard.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Image from "react-bootstrap/Image";

export default function IdCard({ content, gen }) {
  const [gender, setGender] = useState(true);
  const [email, setEmail] = useState("blank@ex.com");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (gen === "male") {
      setGender(false);
    } else {
      setGender(true);
    }
  }, [gen]);

  useEffect(() => {
    const [name, domain] = content.email.split("@");
    const firstE = name.slice(0, 3);
    const lastE = name.slice(-3);
    const finalMail = `${firstE}...${lastE}@${domain}`;
    setEmail(finalMail);

    //Date format
    const date = new Date(content.dob.date).toLocaleDateString("de-DE");
    setDate(date);
  }, [content]);

  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="ms"
      >
        <div className={`row ${gender ? "genderBg" : "genderBg2"}`}>
          <div className="col-md-1 col-sm-2">
            <Image src={content.picture.thumbnail} roundedCircle />
          </div>
          <div className="col-md-11 col-sm-10">
            <p>
              {content.name.first} {content.name.last} <br />
              <span className="email">
                <i className="material-icons">email</i>
                email:{email}
              </span>
              <br />
              <span className="dateBrth">
                <i className="material-icons">cake</i>
                {date}
              </span>
            </p>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
