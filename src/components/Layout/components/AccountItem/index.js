import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AccountItem() {
    return (
      <div className={styles['wrapper']}>
          <img className={styles['avatar']} src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="asd"/>
          <div className={styles['info']}>
              <h4 className={styles['name']}>
                  <span>
                      ASD
                  </span>
                  <FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />
              </h4>
              <span className={styles['username']}>asd</span>
          </div>
      </div>
    );
}

export default AccountItem;