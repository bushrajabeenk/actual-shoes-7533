import React from "react";
import data from "../data.json";
import styles from "./New.module.css";
const New = () => {
  console.log(data);

  return (
    <>
      <div style={{ backgroundColor: "#f3f3f7" }}>
        <div className={styles.heading}>
          <div className={styles.heading1}>Bonsai Reviews</div>
          <div className={styles.heading2}>
            200,000+ Freelancers Love Bonsai. Here's why.
          </div>
          <div className={styles.heading3}>Last Updated April 21,2021</div>
        </div>
        <div style={{ marginBottom: 20 }} className={styles.container}>
          <div className={styles.main1}>
            <img
              src="illustater.PNG"
              alt="illustater"
              style={{ marginRight: 40 }}
            />
            <img
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
              alt=""
            ></img>
            <p style={{ paddingLeft: 36 }} className={styles.mainp}>
              "I did a lot of research before switching to Bonsai from another
              invoicing service. The ability to send and sign contracts was a
              game changer for me. No one else offers such a seamless process
              from proposal to contract to invoice. It has saved me a lot of
              time and lets me focus on creative work."
            </p>
            <h3 style={{ paddingLeft: 36 }} className={styles.mainh3}>
              Kevin Tudball
            </h3>
            <p style={{ paddingLeft: 36 }} className={styles.mainh31}>
              Illustrator
            </p>
          </div>
          <div className={styles.main1}>
            <img
              src="digitall marketer.PNG"
              alt="digitall marketer"
              style={{ marginRight: 40 }}
            />
            <img
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
              alt=""
            ></img>
            <p
              style={{ paddingLeft: 36, marginBottom: 40 }}
              className={styles.mainp}
            >
              "My #1 most used and favourite feature is the contracts, it has
              everything that I need, easy to customise and it automates invoice
              creation which saves me time.
            </p>
            <p style={{ paddingLeft: 36 }} className={styles.mainp}>
              Bonsai is an efficient, effective, affordable, easy to use and
              empowering tool that allows me to do more important tasks."
            </p>
            <h3 style={{ paddingLeft: 36 }} className={styles.mainh3}>
              Jason Curay
            </h3>
            <p style={{ paddingLeft: 36 }} className={styles.mainh31}>
              Digital Marketer
            </p>
          </div>
        </div>
        <div className={styles.container}>
          {data.map(({ review, name }) => {
            return (
              <div className={styles.main}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
                  alt=""
                ></img>
                <p className={styles.mainp}>"{review}"</p>
                <h3 className={styles.mainh3}>{name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default New;