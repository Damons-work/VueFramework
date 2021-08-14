import Vue from "vue";
import VueRouter from "vue-router";
import Person from "../view/person/index";
import Student from "../view/student/index";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/person"
  },
  {
    path: "/person",
    component: Person
  },
  {
    path:"/student",
    component:Student
  }
  
];
const router = new VueRouter({
  routes
});
export default router;