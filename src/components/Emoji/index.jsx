import {  useState,  useEffect} from 'react';
import Emote from '../Emote';
import styles from './Emoji.module.css';
import PropTypes from 'prop-types'

import { cariEmote } from '../../utils/cariEmote'

import Empty from '../Empty';


const Emoji = ({ dataEmoji, searchText }) => {

    const [filterEmote, setFilterEmote] = useState([])

    useEffect (() => {
        setFilterEmote(cariEmote({
            dataEmoji,
            searchText 

        }))
    },[dataEmoji,searchText])

    if(filterEmote.length > 0 ){
        
        return (
            <div className={styles.emojiGrid}>
                {filterEmote.map((data,index) => (
                    <Emote
                        key={index}
                        title={data.title }
                        symbol={data.symbol}
                    />
                ))}
            </div>
        )
    }

    else {
        return (
            <Empty
                text='Oppss Emoji tidak ada, coba pake keyword lain'
            />
        )
       
    }

}

Emoji.propTypes = {
    dataEmoji: PropTypes.array,
    searchText: PropTypes.string
}

export default Emoji