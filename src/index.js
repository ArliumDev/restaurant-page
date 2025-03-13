import './styles.css';
import { Home } from '/page/home.js';
import { Menu } from '/page/menu.js';
import { About } from '/page/about.js';

(function Restaurant() {
  const divContent = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const aboutBtn = document.querySelector('#about');

  function clearContent() {
    divContent.innerHTML = '';
  }

  homeBtn.addEventListener('click', () => {
    clearContent();
    Home();
  });

  menuBtn.addEventListener('click', () => {
    clearContent();
    Menu();
  });

  aboutBtn.addEventListener('click', () => {
    clearContent();
    About();
  });

  Home();
})();

console.log("I'm working!");
