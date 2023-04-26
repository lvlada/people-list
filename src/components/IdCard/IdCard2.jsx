import React from "react";
import "./IdCard2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";

export default function IdCard({ content, gen }) {
  const [gender, setGender] = useState(true);
  const [email, setEmail] = useState('blank@ex.com');
  const [date, setDate] = useState('');

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

    const date = new Date(content.dob.date).toLocaleDateString('de-DE');
    setDate(date)

  },[content]);


  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="ms"
      >
                <div className="col s12 m4" >
                <div class="card hoverable">
                  <div class="card-image">
                    <img src={content.picture.large} />
                    <span class="card-title">
                      {content.name.first}
                    </span>
                  </div>
                  <div class={`card-content s12 m4 ${gender ? "genBg" : "genBg2"}`}>
                    <p>
                      <span className="email">
                        <i class="material-icons">email</i>
                        email:{email}
                      </span>
                      <br />
                      <span className="dateBrth">
                        <i class="material-icons">cake</i>
                        {date}
                      </span>
                    </p>
                </div>
              </div>
            </div>
      </ThemeProvider>
    </>
  );
}
