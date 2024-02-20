import styles from './Container.module.css'
import propTypes from 'prop-types';

const Container = ({children}) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

Container.propTypes = {
    children: propTypes.node
}

export default Container