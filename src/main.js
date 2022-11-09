import {nanoid} from 'nanoid'
import './style.css'

const bnt = document.getElementById('btn')

const passs = document.getElementById('pass')


bnt.addEventListener('click', () => {
  const randomPass = nanoid();
  passs.innerHTML = randomPass;
});
