import css_time_to_milliseconds from '../functions/css_time_to_milliseconds';

const css_transition = (element, args) => {
  const defaults = { property: 'all', duration: '400ms', timingFunction: 'ease', delay: '0ms' },
    params = { ...defaults, ...args };

  const duration = css_time_to_milliseconds(params.duration),
    delay = css_time_to_milliseconds(params.delay),
    standbyTime = duration + delay + 25;

  let transition = `transition-property: ${params.property}; `;
  transition += `transition-duration: ${duration}ms; `;
  transition += `transition-timing-function: ${params.timingFunction}; `;
  transition += `transition-delay: ${delay}ms;`;

  element.setAttribute('style', transition);

  window.setTimeout(() => {
    element.removeAttribute('style', transition);
  }, standbyTime);
};

export default css_transition;
