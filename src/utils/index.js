const showFormattedDate = (date,locale) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const localeFormated = locale === 'id' ? 'id-ID' : 'en-US'; 

  return new Date(date).toLocaleDateString(localeFormated, options);
};

export { showFormattedDate };
