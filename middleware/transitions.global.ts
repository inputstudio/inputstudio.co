export default defineNuxtRouteMiddleware((to, from) => {
  const linksOnLeft = ['/projects', '/contact'];
  const linksOnRight = ['/studio', '/careers'];

  if (from.path === '/') {
    if (linksOnLeft.includes(to.path)) {
      from.meta.pageTransition = { name: 'slide-left', mode: 'out-in' };
      to.meta.pageTransition = { name: 'slide-right', mode: 'out-in' };
    }
    if (linksOnRight.includes(to.path)) {
      from.meta.pageTransition = { name: 'slide-right', mode: 'out-in' };
      to.meta.pageTransition = { name: 'slide-left', mode: 'out-in' };
    }
  } else if (to.path === '/') {
    if (linksOnLeft.includes(from.path)) {
      from.meta.pageTransition = { name: 'slide-right', mode: 'out-in' };
      to.meta.pageTransition = { name: 'slide-left', mode: 'out-in' };
    }
    if (linksOnRight.includes(from.path)) {
      from.meta.pageTransition = { name: 'slide-left', mode: 'out-in' };
      to.meta.pageTransition = { name: 'slide-right', mode: 'out-in' };
    }
  } else {
    from.meta.pageTransition = { name: 'fade', mode: 'out-in' };
    to.meta.pageTransition = { name: 'fade', mode: 'out-in' };
  }
});
