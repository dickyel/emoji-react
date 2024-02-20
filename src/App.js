import { useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Empty from './components/Empty';
import Emoji from './components/Emoji';
import Input from './components/Input';

function App() {

  const  [dataEmoji, setDataEmoji] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    // ini parameter callback function 7 agar tidak berulang2
    () => {
      // function fetch emoji
      async function getEmoji() {
        // di set dulu loading menjadi true agar selalu loadingg walaupun tidak berhasil
        setLoading(true)
        try {
          const respons = await axios.get('https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631');

          setDataEmoji(respons.data)
          // akan muncul karena berhasil
          setLoading(false)
        } catch (error) {
          // memnuculukan error
          console.error(error);
          setError(true);
          // loading kembali false setelah sebalumnya true 
          setLoading(false);
        }
     

      }

      // return function get EMoji
      getEmoji();
    }, []
  )

  const handleCariEmoji = (event) => {
    setSearchText(event.target.value)
  }

  console.log(searchText)

  return (
    <>
      <Navbar/>

      <Container>

      <Input
        onChange={handleCariEmoji}
        value={searchText}
      />

      {/* jika loading true maka akan return sebuah p loading ... */}

      {loading && <Empty text='data loading....'/>}
      {error && <Empty text='oppsss maaf data error' />}

      {/* komponen emoji */}
      {dataEmoji.length > 0 && <Emoji dataEmoji={dataEmoji} searchText={searchText} />}


      </Container>
    
    </>
  );
}

export default App;
