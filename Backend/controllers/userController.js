import { clerkClient } from "@clerk/express";
import Booking from "../models/Booking.js";
//import Movie from "../models/Movie.js";

// ✅ Get User Bookings
export const getUserBookings = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const bookings = await Booking.find({ user: userId })
      .populate({
        path: "show",
        populate: { path: "movie" },
      })
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

// ✅ Update Favourite Movie in Clerk User Metadata
export const updateFavourite = async (req, res) => {
  try {
    const { movieId } = req.body;
    const userId = req.auth.userId;

    const user = await clerkClient.users.getUser(userId);

    // Initialize favourites if not present
    const favourites = user.privateMetadata.favourites || [];

    // Add or remove favourite movie
    const updatedFavourites = favourites.includes(movieId)
      ? favourites.filter((id) => id !== movieId)
      : [...favourites, movieId];

    // Update Clerk metadata
    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: { ...user.privateMetadata, favourites: updatedFavourites },
    });

    res.json({ success: true, message: "Favourites updated successfully." });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get Favourite Movies
export const getFavourites = async (req, res) => {
  try {
    const user = await clerkClient.users.getUser(req.auth.userId);
    const favourites = user.privateMetadata.favourites || [];

    // Fetch favourite movies from database
    const movies = await Movie.find({ _id: { $in: favourites } });

    res.json({ success: true, movies });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
