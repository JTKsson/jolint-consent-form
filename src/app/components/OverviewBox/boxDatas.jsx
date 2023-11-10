// initialState.js
import introIcon from 'public/overview-box-icons/introduction-icon.svg';
import purposeIcon from 'public/overview-box-icons/purpose-icon.svg';
import rightsIcon from 'public/overview-box-icons/your-rights-icon.svg';
import consentIcon from 'public/overview-box-icons/consent-icon.svg';
import checkActive from 'public/overview-box-icons/checkBoxActive.jpg';

const boxData = [
  {
    icon: introIcon,
    alt: 'icon for intro section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Introduction',
    text: 'Let Jolint introduce themselves to you',
    unlocked: false,
    checkBoxDone: false,
  },
  {
    icon: purposeIcon,
    alt: 'icon for purpose section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Purpose',
    text: 'The purpose of having Jolint in your company',
    unlocked: false,
    checkBoxDone: false,
  },
  {
    icon: rightsIcon,
    alt: 'icon for my rights section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Your Rights',
    text: 'Your rights with the processing of your personal data',
    unlocked: false,
    checkBoxDone: false,
  },
  {
    icon: consentIcon,
    alt: 'icon for consent section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Consent',
    text: 'Sign to improve inclusion and belonging in your company',
    unlocked: false,
    checkBoxDone: false,
  },
];

export default boxData;
