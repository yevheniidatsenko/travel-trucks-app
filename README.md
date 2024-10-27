# Travel Trucks Rental Application

## Overview

Welcome to **Travel Trucks Rental**—your go-to spot for booking awesome travel trucks! Whether you're hitting the road for an adventure, planning a fun vacation, or need wheels for work, we make it easy and fun. Let's hit the road together!

## Pages

- **Home Page**: Get a quick peek at all the cool services we offer! Dive into our engaging and vibrant home page to start your adventure.
- **Catalog Page**: Check out our extensive lineup of travel trucks! Easily filter by location, gear, and type to find your perfect ride.
- **Favorites Page**: Your special spot for all your favorite travel trucks, saved just for you. Access and manage your top picks here.
- **Travel Truck Details**: Delve into the nitty-gritty details of each travel truck. Here you’ll find everything you need to know before booking.

## Technical Specifications

- **Travel Truck Card**: Snazzy card layout for showcasing travel truck rental options.
- **Pagination**: View 4 fabulous ads per page. Hit "Load More" for more options.
- **Favorites**: Save your favorites by clicking the heart-shaped button, which changes color to show your preferred trucks.
- **Persistence**: Your favorite trucks stay saved even after refreshing the page.
- **Travel Truck Details**: Click "Show More" for an in-depth look at each camper.
- **Booking Form**: Ready to book? Fill out the form with your name, email, and booking date, then hit submit!

## Technologies Used

### Frontend

- **Vite**: Ensures fast builds and hot module replacement.
- **HTML/CSS**: For structuring and styling.
- **JavaScript**: Adds interactivity.
- **Axios**: Manages HTTP requests.
- **React**: For building user interfaces.
- **Redux & ReduxToolkit**: For state management.
- **Redux-persist**: Keeps state between page reloads.

### Backend

- **[MockAPI](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)**: Simulates backend features for development and testing.

## Routing with React Router

Routes include:

- `/`: Home page with a general overview.
- `/catalog`: Displays various campers.
- `/favorites`: Shows user-saved advertisements.
- _Redirects to home page for non-existent routes._

## Layout

Designs created with **[FIGMA](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&t=wWUj9PeSd7v1KZ5q-1)**.

## Getting Started

```bash
git clone [repository-url]
npm install
npm run dev
```
