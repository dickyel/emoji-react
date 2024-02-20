import { useState, useEffect } from 'react';

import styles from './Emote.module.css';
import PropTypes from 'prop-types'
import classnames from 'classnames';

const Emote = ({title, symbol}) => {

    const [selected, setSelected] = useState(false);

    useEffect( () => {
        const time = setTimeout( 
            () => setSelected(false), 800
        )

        return () => clearTimeout(time)
    }, [selected])

    return (
        <div 
        onClick={
            () => {
                navigator.clipboard.writeText(symbol)
                setSelected(true)
            }
        }
        className={classnames(styles.emote, 
        {
            [styles.selected]: selected
        }
        
        )}>
              <p className={styles.emoji}
                dangerouslySetInnerHTML={{
                    __html: ` &#${symbol.codePointAt(0)}`
                }}
                />

                <p className={styles.emoteText}>
                {selected ? 'Tercopy!' : title}
                </p>
        </div>
    )
}



Emote.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
}

export default Emote