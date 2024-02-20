export const cariEmote = ({ dataEmoji, searchText ="", maxResults = 20}) => {
    const cariEmoteText = dataEmoji.filter(
        emoji => {
            if(emoji.title.toLowerCase().includes(searchText.toLowerCase())) 
            {
                return true
            }

            if(emoji.keywords.includes(searchText.toLowerCase())){
                return true
            }

            return false
        }
    )

    return cariEmoteText.splice(0, maxResults);
}