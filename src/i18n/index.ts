import aleman from './de.json';
import frances from './fr.json';
import italiano from './it.json';
import polaco from './pl.json';
import portugues from './pt.json';
import english from './en.json';

const languages = {
  ALEMAN: 'de',
  FRANCES: 'fr',
  ITALIANO: 'it',
  POLACO: 'pl',
  PORTUGUES: 'pt',
  ENGLISH: 'en',
};

export const getI18N = ({
  currentLocale = 'en',
}: {
  currentLocale: string | undefined;
}) => {
  switch (currentLocale) {
    case languages.ALEMAN:
      return aleman;
    case languages.FRANCES:
      return frances;
    case languages.ITALIANO:
      return italiano;
    case languages.POLACO:
      return polaco;
    case languages.PORTUGUES:
      return portugues;
    default:
      return english;
  }
};
