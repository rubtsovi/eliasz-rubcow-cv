import style from './assets/styles/style.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAddressBook, faShareAlt, faGraduationCap, faBriefcase, faCalendarAlt, faLaptopCode, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faPhp, faSymfony, faAngular, faYarn, faBootstrap, faGitAlt, faSass } from '@fortawesome/free-brands-svg-icons';
import { jqueryIcon, webpackIcon, photoshopIcon, typescriptIcon, mysqlIcon } from './assets/icons';

import { stagger, styler, spring } from 'popmotion';

const personalInfoPart = require('./partials/personal-info-bar.hbs');
const infoCard = require('./partials/right-info-card.hbs');
const miscellaneousCard = require('./partials/miscellaneous-info-card.hbs');
const personalInfoData = require('./personal-data.json');

const personalDataSection = document.getElementById('personal-info-bar');
personalDataSection.innerHTML = personalInfoPart(personalInfoData);
document.getElementById('education-block').innerHTML = infoCard(require('./education-data.json'));
document.getElementById('professional-experience-block').innerHTML = infoCard(require('./professional-experience.json'));
document.getElementById('misceallenous-block').innerHTML = miscellaneousCard(require('./miscellaneous.json'));
// document.getElementById('professional-experience-block').innerHTML = infoCard();

library.add(faHome, faAddressBook, faShareAlt, faCss3, faHtml5, faJs, faPhp, jqueryIcon, faGraduationCap, faBriefcase, faCalendarAlt, faLaptopCode, faPaperclip, faSymfony, faAngular, faYarn, webpackIcon, faBootstrap, faGitAlt, faSass, photoshopIcon, typescriptIcon, mysqlIcon);
dom.watch();

const stylers = Array.from(document.querySelectorAll('.skill-pointer')).map(styler);
let animations = Array(stylers.length).fill(spring({ to: '100%', stiffness: 15, damping: 5 }));


stagger(animations, 300)
    .start((pointerProps) => pointerProps.forEach((pointerProp, i) => stylers[i].set('left', pointerProp)));
