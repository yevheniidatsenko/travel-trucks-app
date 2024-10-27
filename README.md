# Travel Trucks Rental Application

## Overview

Welcome to **Travel Trucks Rental**—your go-to spot for booking awesome travel trucks! Whether you're hitting the road for an adventure, planning a fun vacation, or need wheels for work, we make it easy and fun. Let's hit the road together!

## Pages

- **Home Page**: Get a quick peek at all the cool services we offer! Dive into our engaging and vibrant home page to start your adventure.
- **Catalog Page**: Check out our extensive lineup of travel trucks! Easily filter by location, gear, and type to find your perfect ride.
- **Favorites Page**: Your special spot for all your favorite travel trucks, saved just for you. Access and manage your top picks here.
- **Travel Truck Details**: Delve into the nitty-gritty details of each travel truck. Here you’ll find everything you need to know before booking.

## Technical Specifications

- **Travel Truck Display Card**: Showcases each travel truck rental option in an attractive card design, enhancing visual appeal and user interaction.
- **Pagination**: Displays four eye-catching advertisements per page. Users can explore additional options by clicking the "Load More" button.
- **Favorites Feature**: Users can bookmark their preferred travel trucks by clicking the heart icon, which changes color to indicate their favorites.
- **Data Persistence**: Favorites are retained across browser sessions, ensuring users' selections are saved even after refreshing the page.
- **Detailed Truck Information**: Provides in-depth details for each travel truck through a "Show More" button, facilitating better user decision-making.
- **Reservation Form**: Allows users to book their chosen truck by filling out a form with their name, email, and booking date, followed by submitting it to secure their reservation.

## How to Use

1. **Explore Options**: Browse the catalog to view various travel truck options.
2. **Bookmark Favorites**: Click the heart icon on any truck card to add it to your favorites.
3. **Learn More**: For more detailed information about a truck, click the "Show More" button on any truck card.
4. **Book Your Truck**: From the truck's detailed page, fill in the reservation form and hit submit to finalize your booking.

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

## Layout

Designs created with **[FIGMA](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&t=wWUj9PeSd7v1KZ5q-1)**.

## Getting Started

```bash
git clone [repository-url]
npm install
npm run dev
```
