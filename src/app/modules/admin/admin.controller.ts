import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminService } from "./admin.service";

const blockUser = catchAsync(async (req, res) => {
    const result = await AdminService.blockUser(req.params.id);
    sendResponse(res, {
        success: true,
        message: 'User blocked successfully',
        statusCode: 200,
        data:null
    })
});
 
export const AdminController = {
    blockUser
}