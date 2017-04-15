function selectLink(linkName, url) {
  let className = ' inner-nav__item--current';
  if (linkName !== url) {
    className = "";
  }
  return className;
}

module.exports = selectLink;


