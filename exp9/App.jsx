import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ClassCard from "./components/ClassCard";
import TrainerCard from "./components/TrainerCard";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

const yogaClasses = [
  { name: "Hatha Yoga", description: "Gentle poses, mindful breathing, and a grounded pace for beginners.", duration: "60 min", level: "Beginner", icon: "☀️" },
  { name: "Vinyasa Yoga", description: "A flowing practice that connects every movement with your breath.", duration: "60 min", level: "Intermediate", icon: "🌊" },
  { name: "Ashtanga Yoga", description: "A traditional sequence that builds strength, focus, and endurance.", duration: "75 min", level: "Advanced", icon: "🔥" },
  { name: "Meditation", description: "Quiet your thoughts with guided techniques for calm and clarity.", duration: "30 min", level: "All levels", icon: "🌙" },
  { name: "Power Yoga", description: "An energising practice to improve stamina, balance, and confidence.", duration: "60 min", level: "Intermediate", icon: "🌿" }
];

const trainers = [
  { name: "Maya Sharma", specialty: "Hatha & Mindfulness", description: "Maya helps students create a calm, sustainable practice through breath and alignment.", initials: "MS" },
  { name: "Arjun Mehta", specialty: "Vinyasa & Power Yoga", description: "Arjun brings joyful energy to dynamic flows that challenge and encourage every student.", initials: "AM" },
  { name: "Leela Nair", specialty: "Meditation & Restorative", description: "Leela guides peaceful sessions that help the body release tension and the mind reset.", initials: "LN" }
];

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedClass, setSelectedClass] = useState("");

  const chooseClass = (className) => {
    setSelectedClass(className);
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`app ${theme}-theme`}>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
      <main>
        <Hero />
        <section className="section about-section" id="about">
          <div className="section-label">Our philosophy</div>
          <div className="about-grid">
            <h2>A softer way to become <em>stronger.</em></h2>
            <p>At Serenity, yoga is more than a workout. It is a chance to reconnect with your body, settle your mind, and create space for what matters. Our welcoming studio supports physical wellness, mindfulness, and deep relaxation.</p>
          </div>
        </section>
        <section className="section" id="classes">
          <div className="section-heading"><div><div className="section-label">Find your flow</div><h2>Classes for every body</h2></div><p>Move at your own pace. Grow at your own rhythm.</p></div>
          <div className="class-grid">{yogaClasses.map((yogaClass) => <ClassCard key={yogaClass.name} yogaClass={yogaClass} onBook={chooseClass} />)}</div>
        </section>
        <section className="section trainers-section" id="trainers">
          <div className="section-label">Meet your guides</div><h2>Teachers who care</h2>
          <div className="trainer-grid">{trainers.map((trainer) => <TrainerCard key={trainer.name} trainer={trainer} />)}</div>
        </section>
        <BookingForm classes={yogaClasses} selectedClass={selectedClass} onClassChange={setSelectedClass} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
