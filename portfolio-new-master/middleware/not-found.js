export default function ({ route, redirect }) {
    // If the route is not found, redirect to the custom 404 page
    if (!route.matched.length) {
      return redirect('/404');
    }
  }