import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./Freetrial.module.css";
const Freetrial = () => {
  return (
    // const navigate = useNavigate();
    // const handleback = () => {
    //   navigate("/");
    // };
    // onClick={handleback}
    <>
      <div style={{ display: "flex", marginLeft: 30 }}>
        <div className={styles.part1}>
          <img
            src="https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg"
            alt="img"
          />
        </div>
        <div className={styles.part2}>
          <div className={styles.part21}>
            Start your 7-day Free Trial to continue
          </div>
          <div className={styles.part22}>
            <div className={styles.part221}>Starter</div>
            <div className={styles.part222}>
              All-in-one solution for freelancers and contractors
            </div>
            <div
              style={{
                color: "#00B289",
                fontSize: 32,
                marginBottom: 15,
                height: 45.5,
              }}
            >
              <span>$</span>
              24
              <span
                style={{
                  color: "#878787",
                  fontSize: 11,
                  fontWeight: 500,
                  marginLeft: 8,
                }}
              >
                per month
              </span>
            </div>
            <div
              style={{
                borderTop: "solid 2px #ECF0F1",
                paddingTop: 20,
                fontSize: 14,

                color: "#535355",
                lineHeight: 2,
                fontFamily: "sans-serif",
                wordSpacing: 0,
              }}
            >
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>All Templates</div>
              </div>
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>Unlimited Clients & Projects</div>
              </div>
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>Invoicing & Payments</div>
              </div>
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>Proposals & Contracts</div>
              </div>
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>Tasks & Time Tracking</div>
              </div>
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>Client CRM</div>
              </div>
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>Expense Tracking</div>
              </div>
              <div className={styles.flex}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  width="12"
                  alt="tick icon"
                />
                <div>Up to 5 Project Collaborators</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.part03}>
            <button className={styles.crossbutton}>
              <img
                className={styles.crossbuttonimg}
                src="cross.PNG"
                alt="cross"
              />
            </button>
          </div>
          <div className={styles.part3}>
            <div className={styles.part301}>
              <div className={styles.part31}>
                <div style={{ fontWeight: 700 }}>Starter Plan</div>
                <div>$24</div>
              </div>
              <div className={styles.part32}>Add Promo Code</div>
              <div className={styles.part33}>
                <div>Due today</div>
                <div>$0</div>
              </div>
              <div className={styles.part34}>
                <div>Due in 7 days</div>
                <div>$24</div>
              </div>
            </div>
            <div className={styles.part302}>
              <div className={styles.part35}>
                <div>
                  <img src="star.PNG" alt="star" />
                </div>
                <div style={{ marginLeft: 8 }}>Cancel at any time</div>
              </div>
              <div className={styles.part35}>
                <div>
                  <img src="star.PNG" alt="star" />
                </div>
                <div style={{ marginLeft: 8 }}>30 day money-back guarantee</div>
              </div>
            </div>
            <div>
              <div className={styles.extra1}>
                <img
                  style={{ position: "absolute", marginTop: 7 }}
                  src="user.PNG"
                  alt="star"
                />
                <input
                  style={{ marginLeft: 25 }}
                  className={styles.card}
                  type="text"
                  placeholder="Cardholder name"
                />
              </div>
            </div>
            <div className={styles.extra1}>
              <img
                style={{ position: "absolute", marginTop: 6 }}
                src="card.PNG"
                alt="star"
              />
              <input
                className={styles.card}
                style={{ width: 400, marginLeft: 35 }}
                type="text"
                id="ccFormatMonitor"
                placeholder="Card Number"
              />
              <div className={styles.extra}>
                <input
                  className={styles.card}
                  style={{ width: 60 }}
                  type="text"
                  id="inputExpDate"
                  placeholder="MM / YY"
                  maxlength="7"
                />

                <input
                  className={styles.card}
                  style={{ width: 50 }}
                  type="password"
                  id="cvv"
                  placeholder="CVV"
                />
              </div>
            </div>
            <button className={styles.cardbutton}> Start Free Trial</button>
            <div className={styles.last}>
              <div>
                <img src="lock.PNG" alt="lock" />
              </div>
              <div style={{ marginTop: 2 }}>
                Guaranteed safe & secure payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Freetrial;
