import Axios from 'axios'
const instance = Axios.create({
baseURl:'https://api.themoviedb.org/3'
})
export default instance