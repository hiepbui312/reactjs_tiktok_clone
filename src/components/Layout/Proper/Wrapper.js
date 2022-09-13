import styles from './Proper.module.scss';

function Wrapper({ children }) {
    return <div className={styles['wrapper']}>
        {children}
    </div>
}

export default Wrapper;