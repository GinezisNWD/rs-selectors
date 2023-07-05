import './styles/styles.css'
import './assets/sass/main.scss'
import CSSDinnerApp from './scripts/app'
const levelNumber = Number(localStorage.getItem('levelNumber'))
// console.log(curentLevel)

const app = new CSSDinnerApp(0)
app.start()
