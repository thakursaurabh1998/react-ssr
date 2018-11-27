import Home from "./Home";
import Grid from "./Grid";
import { fetchPopularRepos } from "./api";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/popular/:id",
    component: Grid,
    fetchInitialData: () => fetchPopularRepos(path.split("/").pop())
  }
];

export default routes;
