export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth',
    }
  }

  if (to.path !== from.path) {
    window.scrollTo(0, 0)
  }
}
