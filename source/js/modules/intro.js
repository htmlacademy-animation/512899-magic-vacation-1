import LetterAnimation from "./LetterAnimation";

const addIntroTitleAnimation = () => {
  const elements = document.querySelectorAll(`.js-text-show`);
  elements.forEach((element) => {
    const animation = new LetterAnimation({
      element,
      duration: 400,
      wordClass: `intro__word`,
      letterClass: `intro__letter`,
      transitionProperty: `transform`
    });
  });
};

export default () => {
  addIntroTitleAnimation();
};
