import { canNavigate } from 'router/casl'

export const setupGuards = router => {
  router.beforeEach((to, from, next) => {
    console.log(to)
    console.log('to.meta.public: ' + to.meta.public)

    if (to.meta.public) {
      // If it's a public route, continue navigation
      next();
      return;
    }

    const isLoggedIn =!! localStorage.getItem("accessToken"); // Update this logic based on your authentication state

    console.log('loggedin:' + isLoggedIn)

    if (to.meta.unauthenticatedOnly) {
      // If user is logged in and trying to access an unauthenticated-only page, redirect to home
      if (isLoggedIn) {
        next('/dashboard');
      } else {
        next();
      }
      return;
    }

    console.log('canNavigate: ' + canNavigate(to, isLoggedIn));

    if (!canNavigate(to, isLoggedIn)) {
      /* eslint-disable indent */
      next(isLoggedIn
        ? { name: 'not-authorized' }
        : {
            name: 'login',
            query: {
                ...to.query,
                to: to.fullPath !== '/' ? to.path : undefined,
            },
        }
      );
      /* eslint-enable indent */
    } else {
      // Allow navigation if all conditions pass
      next();
    }
  });
};
