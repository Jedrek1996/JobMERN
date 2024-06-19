import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import JobModels from "../models/JobModels.js";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get current user" });
};
export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "application stats" });
};
export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "update" });
};
