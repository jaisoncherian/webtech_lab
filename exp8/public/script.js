const bookingForm = document.querySelector("#booking-form");
const classSelect = document.querySelector("#class-name");
const allClasses = document.querySelector("#all-classes");

async function loadClasses() {
  try {
    const response = await fetch("/api/classes");
    if (!response.ok) throw new Error("Unable to load classes.");
    const classes = await response.json();

    if (classSelect) {
      classes.forEach((yogaClass) => {
        const option = document.createElement("option");
        option.value = yogaClass.name;
        option.textContent = yogaClass.name;
        classSelect.appendChild(option);
      });
    }

    if (allClasses) {
      allClasses.innerHTML = classes.map((yogaClass, index) => `
        <article class="class-card">
          <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${yogaClass.name}</h3>
          <p>${yogaClass.description}</p>
          <strong>${yogaClass.duration} · ${yogaClass.level}</strong>
        </article>
      `).join("");
    }
  } catch (error) {
    if (allClasses) allClasses.innerHTML = "<p class='error'>Classes could not be loaded. Please try again.</p>";
  }
}

if (bookingForm) {
  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.querySelector("#form-message");
    const formData = new FormData(bookingForm);
    const details = Object.fromEntries(formData.entries());

    message.textContent = "Booking your session...";
    message.className = "form-message";

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Booking failed.");
      message.textContent = result.message;
      message.className = "form-message success";
      bookingForm.reset();
    } catch (error) {
      message.textContent = error.message;
      message.className = "form-message error";
    }
  });
}

loadClasses();
