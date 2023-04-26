import React from "react";
import "./Card.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import IdCard2 from "../IdCard/IdCard2";

export default function Card2() {
  const url = "https://randomuser.me/api/?results=15";
  const [user, setUser] = useState([]);
  const [male, setMale] = useState(0);
  const [female, setFemail] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [firstLast, setFirstLast] = useState("");

  useEffect(() => {
    fetch(url)
      .then((respon) => {
        return respon.json();
      })
      .then((json) => {
        setUser(json.results);
        console.log("res", json);
        console.log("user", user);
      });
  }, []);
  useEffect(() => {
    console.log("user", user);
    const maleNew = user.filter((user) => user.gender === "male");
    setMale(maleNew.length);
    const femaleNew = user.filter((user) => user.gender === "female");
    setMale(maleNew.length);
    setFemail(femaleNew.length);
  }, [user]);

  useEffect(() => {
    const newRes = user.filter((user) =>
      user.name.first
        .concat(user.name.last)
        .toString()
        .toLowerCase()
        .includes(inputVal.toLowerCase())
    );
    setFirstLast(newRes);
    console.log(firstLast);
  }, [inputVal]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <input
              id="search"
              type="search"
              class="validate"
              placeholder="Search users"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <p className="countMF">
              Male: {male} Female: {female}
            </p>
            {firstLast.length > 0 && (
              <>
                {firstLast.map((item, index) => {
                  return (
                    <IdCard2 key={index} content={item} gen={item.gender} />
                  );
                })}
              </>
            )}
            {user.length > 0 && firstLast.length == 0 && (
              <>
                {user.map((item, index) => {
                  return (
                    <IdCard2 key={index} content={item} gen={item.gender} />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
