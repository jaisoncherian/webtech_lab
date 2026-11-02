# Serenity Yoga Studio - ReactJS

## Run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## React concepts demonstrated

- **Functional components:** `Header`, `Hero`, `ClassCard`, `TrainerCard`, `BookingForm`, and `Footer` are reusable components.
- **Props:** Class and trainer objects, theme values, and callbacks are passed from `App` to child components.
- **useState:** `App` manages the light/dark theme and selected class. `BookingForm` manages form inputs and the confirmation message.
- **Events:** `onClick`, `onChange`, and `onSubmit` power theme switching, class selection, and form submission.
- **Conditional rendering:** The booking confirmation appears only after a valid form submission.
- **Array mapping:** Class and trainer arrays are rendered dynamically with `.map()`.

No backend, database, or external API is used.
