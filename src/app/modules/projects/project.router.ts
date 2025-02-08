import auth from '../../middlewares/auth';

import { USER_ROLE } from '../user/user.constant';
import express from 'express';
import { ProjectController } from './project.controller';

const router = express.Router();

router.post(
  '/',
  auth('admin'),

  ProjectController.createProject,
);

router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectById);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),

  ProjectController.updateProject,
);

router.delete('/:id', auth(USER_ROLE.admin), ProjectController.deleteProject);

export const ProjectRouter = router;
