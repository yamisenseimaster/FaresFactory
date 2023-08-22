import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/slider.css'
import '../styles/components/featured.css';
import '../styles/components/info.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './components/mobile-nav';
import darkMode from './components/dark-mode';
import lazyLoading from './components/lazy-loading';
// import {dragStart, dragging, dragStop, infiniteScroll, autoPlay} from './utils/slider'

mobileNav();
darkMode();
lazyLoading();
// dragStart()
// dragStop()
// dragging()
// infiniteScroll()
// autoPlay()