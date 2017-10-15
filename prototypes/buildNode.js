import PairedTag from './pairedTag';
import SingleTag from './singleTag';

export default (name, attrs, body, children) => {
  const singleTagsList = new Set(['hr', 'img', 'br']);

  if (singleTagsList.has(name)) {
    return new SingleTag(name, attrs);
  }
  return new PairedTag(name, attrs, body, children);
};
