const preventDefaults = el => {
  el.preventDefault();
  el.stopPropagation();
};
export default preventDefaults;
