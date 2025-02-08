
import catchAsync from '../../utils/catchAsync';
import { AdminServices } from './admin.service';


const deleteBlogByAdmin = catchAsync(async (req, res) => {
  const id = req.params.id;
  await AdminServices.deleteBlogFromDB(id);

  res.status(200).json({
    success: true,
    message: ' successfully deleted blog',
  });
});

export const AdminControllers = {

  deleteBlogByAdmin,
};
