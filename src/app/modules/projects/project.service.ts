import AppError from '../../error/AppError';
import { TProject } from './projects.interface';
import { Project } from './projects.model';


const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id).populate('author', 'name email');
  if (!result) {
    throw new AppError(404, 'Project not found');
  }
  return result;
};

const updateProject = async (
  id: string,
  payload: Partial<TProject>,
  userId: string,
  userRole: string,
) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(404, 'Project not found');
  }

  if (project.author.toString() !== userId && userRole !== 'admin') {
    throw new AppError(403, 'Unauthorized: You can only edit your own Project');
  }

  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteProject = async (id: string, userId: string, userRole: string) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new AppError(404, 'Project not found');
  }

  if (project.author.toString() !== userId && userRole !== 'admin') {
    throw new AppError(403, 'Unauthorized: You can only delete your own Project');
  }

  const result = await Project.findByIdAndDelete(id);
  return result;
};

const getAllProjects = async () => {
  const result = await Project.find().populate('author', 'name email');
  return result;
};

export const ProjectService = {
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
  getAllProjects,
};
