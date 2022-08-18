const addElementToMultipleEvents = (eventNameArray, el, fn, capture = false) => {
  eventNameArray.forEach(eventName => {
    el.addEventListener(eventName, fn, capture);
  });
};
export default addElementToMultipleEvents;
