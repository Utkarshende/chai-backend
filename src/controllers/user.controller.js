import { asyncHandler } from "../utils/asyncHandler.js";

const registeruser = asyncHandler(async (requestAnimationFrame, res) => {
        res.status(200).json({
        message:"OK"
    })
})


export {registeruser}