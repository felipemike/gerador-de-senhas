import {nanoid} from 'nanoid'
import './style.css'

const bnt = document.getElementById('btn')

const pass = document.getElementById('pass')

bnt.addEventListener('click', () => {
  const randomPass = nanoid();
  pass.innerHTML = randomPass;
});
