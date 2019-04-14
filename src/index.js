import style from './assets/styles/style.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAddressBook, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faPhp } from '@fortawesome/free-brands-svg-icons';
import { jqueryIcon } from './assets/icons/jquery-icon';

import { stagger, styler, spring } from 'popmotion';

const personalInfoPart = require('./partials/personal-info-bar.hbs');
const infoCard = require('./partials/right-info-card.hbs');
const personalInfoData = require('./personal-data.json');

const personalDataSection = document.getElementById('personal-info-bar');
personalDataSection.innerHTML = personalInfoPart(personalInfoData);
document.getElementById('education-block').innerHTML = infoCard();
document.getElementById('professional-experience-block').innerHTML = infoCard();

library.add(faHome, faAddressBook, faShareAlt, faCss3, faHtml5, faJs, faPhp, jqueryIcon);
dom.watch();

const stylers = Array.from(document.querySelectorAll('.skill-pointer')).map(styler);
let animations = Array(stylers.length).fill(spring({ to: '100%', stiffness: 15, damping: 5 }));


stagger(animations, 300)
    .start((pointerProps) => pointerProps.forEach((pointerProp, i) => stylers[i].set('left', pointerProp)));
