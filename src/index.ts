import './styles/styles.css'
import './assets/sass/main.scss'
import CSSDinnerApp from './scripts/app'
const levelNumber = Number(localStorage.getItem('levelNumber'))

const app = new CSSDinnerApp(levelNumber)
app.start()
