import express from "express";
import {
  createTicket,
  getAllTickets,
  getMyTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../controllers/ticketController.js";

import { verifyToken } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Authenticated users
router.post("/", verifyToken, createTicket);
router.get("/my", verifyToken, getMyTickets);
router.get("/:id", verifyToken, getTicketById);
router.put("/:id", verifyToken, updateTicket);
router.delete("/:id", verifyToken, deleteTicket);

// Agents only
router.get("/", verifyToken, authorizeRoles("agent"), getAllTickets);

export default router;
