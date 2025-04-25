import Ticket from "../models/Ticket.js";

// Create a ticket
export const createTicket = async (req, res) => {
  try {
    console.log(req.body);

    const { title, description } = req.body;

    const ticket = await Ticket.create({
      title,
      description,
      user: req.user.userId,
    });

    res.status(201).json(ticket);
  } catch (err) {
    console.log("Error from tickets/create:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all tickets (agent only)
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate("user", "name email");
    res.json(tickets);
  } catch (err) {
    console.log("Error from tickets/getAll:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get logged-in user's tickets
export const getMyTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.userId });
    res.json(tickets);
  } catch (err) {
    console.log("Error from tickets/getMy:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get single ticket (owner or agent)
export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    if (
      ticket.user.toString() !== req.user.userId &&
      req.user.role !== "agent"
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(ticket);
  } catch (err) {
    console.error("Error from getTicketById:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    // Check if ticket exists
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    // Check if user is either the owner of the ticket or an agent
    if (
      ticket.user.toString() !== req.user.userId &&
      req.user.role !== "agent"
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    const updatedData = { ...req.body };

    // Update the ticket
    const updated = await Ticket.findByIdAndUpdate(req.params.id, updatedData, {
      new: true, // This will return the updated document
    });

    res.json(updated);
  } catch (err) {
    console.error("Error from updateTicket:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    // Check if ticket exists
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    // Check if user is either the owner of the ticket or an agent
    if (
      ticket.user.toString() !== req.user.userId &&
      req.user.role !== "agent"
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Delete the ticket
    await ticket.deleteOne(); // You can also use ticket.deleteOne() here if you prefer

    res.json({ message: "Ticket deleted successfully" });
  } catch (err) {
    console.error("Error from deleteTicket:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
