import {nanoid} from 'nanoid'
import './style.css'
import clipboardCopy from 'clipboard-copy'

const bnt = document.getElementById('btn')

const passs = document.getElementById('pass')


bnt.addEventListener('click', () => {
  const randomPass = nanoid();
  passs.innerHTML = randomPass;
});

passs.addEventListener('click', () =>{
  clipboardCopy(passs.innerHTML);
})
