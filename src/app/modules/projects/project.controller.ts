import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

import { sendResponse } from '../../utils/sendResponse';
import AppError from '../../error/AppError';
import { ProjectService } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const user = req?.user;

  if (!user) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'User not authenticated');
  }
  const ProjectData = { ...req?.body, author: user?.id };

  const result = await ProjectService.createProject(ProjectData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Project created successfully',
    data: result,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const result = await ProjectService.getSingleProject(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  const result = await ProjectService.updateProject(id, req.body, _id, role);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { _id, role } = req.user;

  const result = await ProjectService.deleteProject(id, _id, role);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Project deleted successfully',
    data: result,
  });
});

const getAllProjects = catchAsync(async (_, res) => {
  const result = await ProjectService.getAllProjects();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Projects retrieved successfully',
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  getAllProjects,
};
