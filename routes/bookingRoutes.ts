import express, { Request, Response } from "express";
import { Booking } from "../interfaces/booking";
import { Room } from "../interfaces/room";
const router = express.Router();

//* Sample Data
const bookings: Booking[] = require("../data/bookings.json");
const rooms: Room[] = require("../data/rooms.json");

// Get all bookings
router.get("/", (req: Request, res: Response) => {
  res.send("All Bookings");
});

// Create a booking
router.post("/", (req: Request, res: Response) => {
  res.send("New booking created");
});

// Check room availability
router.get("/check-availability/:roomId", (req: Request, res: Response) => {
  const { roomId } = req.params;
  res.send(`Check availability for room with ID: ${roomId}`);
});

// Get a specific booking
router.get("/:bookingId", (req: Request, res: Response) => {
  const { bookingId } = req.params;
  res.send(`Details of booking with ID: ${bookingId}`);
});

// Update a booking
router.put("/:bookingId", (req: Request, res: Response) => {
  const { bookingId } = req.params;
  res.send(`Booking with ID: ${bookingId} updated`);
});

// Cancel a booking
router.delete("/:bookingId", (req: Request, res: Response) => {
  const { bookingId } = req.params;
  res.send(`Booking with ID: ${bookingId} cancelled`);
});

export default router;
