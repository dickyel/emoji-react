import styles from './Input.module.css'
import PropTypes from 'prop-types'

const Input = ({ onChange,value }) => {
    return (
        <input className={styles.form} onChange={onChange} placeholder='cari emote' value={value} />
    )
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input