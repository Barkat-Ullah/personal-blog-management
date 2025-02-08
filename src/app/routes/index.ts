import { Router } from 'express';
import { UserRouter } from '../modules/user/user.router';
import { BlogRouter } from '../modules/blog/blog.router';
import { ProjectRouter } from '../modules/projects/project.router';
import { ContactRouter } from '../modules/contact/contact.router';

const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    routes: UserRouter,
  },
  {
    path: '/admin/blogs',
    routes: BlogRouter,
  },
  {
    path: '/admin/projects',
    routes: ProjectRouter,
  },
  {
    path: '/contact',
    routes: ContactRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
