# Advanced Interactive Personal Website - ICT251 Activity 3

## Overview
This repository contains an advanced, responsive student portfolio designed for **ICT251 Web Technologies Activity 3**. Built with HTML5, CSS custom properties, glassmorphic UI elements, and pure JavaScript, the site integrates form validation and client-side features.

## JavaScript Features Implemented
1. **Compulsory Contact Form Validation & Preview:**
   - Intercepts default browser submission using `event.preventDefault()`.
   - Rejects blank, whitespace-only, or improperly formatted email entries.
   - Dynamically displays a submission preview summary using `textContent`.
   - Includes the notice: *"Browser demonstration only — no message is sent."*

2. **Interactive Photo Gallery Viewer:**
   - Navigates through project photos and matching captions using Previous/Next controls.
   - Smoothly wraps around when reaching the first or last photo.

3. **Real-time Project & Skill Search Filter:**
   - Dynamically filters portfolio cards according to user input.
   - Features a **Reset** button and clear "No matching results" notification.

4. **Mobile Drawer Navigation:**
   - Expands and collapses the top navigation bar on smaller viewport displays.

## Deployment Instructions on Render
1. Push code to your public GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy advanced Activity 3 interactive portfolio"
   git push origin main