import React from 'react';
import styles from "./GeneralDetails.module.scss";

const GeneralDetails: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.divWrapper}>
            <h3>Personal Information</h3>
            <div className={styles.innerDiv}>
                <div>
                    <p>FULL NAME</p>
                    <h4>Grace Effiom</h4>
                </div>

                <div>
                    <p>EMAIL ADDRESS</p>
                    <h4>grace@gmail.com</h4>
                </div>

                <div>
                    <p>BVN</p>
                    <h4>07060780922</h4>
                </div>

                <div>
                    <p>GENDER</p>
                    <h4>Female</h4>
                </div>
            </div>

            <div className={styles.innerDiv}>
                <div>
                    <p>MARITAL STATUS</p>
                    <h4>Single</h4>
                </div>
                
                <div>
                    <p>CHILDREN</p>
                    <h4>None</h4>
                </div>
                
                <div>
                    <p>TYPE OF RESIDENCE</p>
                    <h4>Parent's Apartment</h4>
                </div>
                
                <div>
                    <p></p>
                    <h4></h4>
                </div>
            </div>
        </div>

        <hr />

        <div className={styles.divWrapper}>
            <h3>Education and Employment</h3>
            <div className={styles.innerDiv}>
                <div>
                    <p>LEVEL OF EDUCATION</p>
                    <h4>B.Sc</h4>
                </div>
                
                <div>
                    <p>EMPLOYMENT STATUS</p>
                    <h4>Employed</h4>
                </div>

                <div>
                    <p>SECTOR OF EMPLOYMENT</p>
                    <h4>FinTech</h4>
                </div>

                <div>
                    <p>DURATION OF EMPLOYMENT</p>
                    <h4>2 years</h4>
                </div>
            </div>

            <div className={styles.innerDiv}>
                <div>
                    <p>OFFICE EMAIL</p>
                    <h4>grace@lendsqr.com</h4>
                </div>

                <div>
                    <p>MONTHLY INCOME</p>
                    <h4>₦200,000.00- ₦400,000.00</h4>
                </div>

                <div>
                    <p>LOAN REPAYMENT</p>
                    <h4>40,000</h4>
                </div>

                <div>
                    <p></p>
                    <h4></h4>
                </div>
            </div>
        </div>

        <hr />

        <div className={styles.divWrapper}>
            <h3>Socials</h3>
            <div className={styles.innerDiv}>
                <div>
                    <p>TWITTER</p>
                    <h4>@grace_effiom</h4>
                </div>                

                <div>
                    <p>FACEBOOK</p>
                    <h4>Grace Effiom</h4>
                </div>

                <div>
                    <p>INSTAGRAM</p>
                    <h4>@grace_effiom</h4>
                </div>

                <div>
                    <p></p>
                    <h4></h4>
                </div>
            </div>
        </div>

        <hr />

        <div className={styles.divWrapper}>
            <h3>Guarantor</h3>
            <div className={styles.innerDiv}>
                <div>
                    <p>FULL NAME</p>
                    <h4>Debby Ogana</h4>
                </div>
                
                <div>
                    <p>PHONE NUMBER</p>
                    <h4>07060780922</h4>
                </div>
                
                <div>
                    <p>EMAIL ADDRESS</p>
                    <h4>debby@gmail.com</h4>
                </div>
                
                <div>
                    <p>RELATIONSHIP</p>
                    <h4>Sister</h4>
                </div>
            </div>
        </div>

        <hr />

        <div className={styles.divWrapper}>
            <div className={styles.innerDiv}>
            <div>
                    <p>FULL NAME</p>
                    <h4>Debby Ogana</h4>
                </div>
                
                <div>
                    <p>PHONE NUMBER</p>
                    <h4>07060780922</h4>
                </div>
                
                <div>
                    <p>EMAIL ADDRESS</p>
                    <h4>debby@gmail.com</h4>
                </div>
                
                <div>
                    <p>RELATIONSHIP</p>
                    <h4>Sister</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralDetails;