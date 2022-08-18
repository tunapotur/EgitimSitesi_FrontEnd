import {
  screenSizeChange,
  cards_list_lastElement_marginRight,
  visible_xCardsCount,
  visible_aCardsCount,
} from './cards_shared';

const xCards_typePageList = document.querySelector('.xCards-type-page__list');
if (document.querySelector('.xCards-type-page'))
  document.addEventListener('DOMContentLoaded', () => {
    cards_list_lastElement_marginRight(xCards_typePageList, visible_xCardsCount);
    screenSizeChange(cards_list_lastElement_marginRight.bind(null, xCards_typePageList, visible_xCardsCount));
  });

const aCards_userPageList = document.querySelector('.aCards-user-page__list');

if (document.querySelector('.aCards-user-page'))
  document.addEventListener('DOMContentLoaded', () => {
    cards_list_lastElement_marginRight(aCards_userPageList, visible_aCardsCount);
    screenSizeChange(cards_list_lastElement_marginRight.bind(null, aCards_userPageList, visible_aCardsCount));
  });
