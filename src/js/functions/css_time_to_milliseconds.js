const css_time_to_milliseconds = s => parseFloat(s) * (/\ds$/.test(s) ? 1000 : 1);

export default css_time_to_milliseconds;
