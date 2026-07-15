import { useState } from "react";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import SummaryCard from "../components/SummaryCard";
import FeatureCard from "../components/FeatureCard";
import Flashcard from "../components/Flashcard";
import QuizCard from "../components/QuizCard";
import Footer from "../components/Footer";

function Home() {

  const [summary, setSummary] = useState("");

  return (
    <>
      <Navbar />

      <main className="container">

        <UploadBox onGenerate={setSummary} />

        <div className="feature-grid">

          <FeatureCard
            title="AI Summary"
            description="Generate concise summaries."
          />

          <FeatureCard
            title="Keywords"
            description="Extract important keywords."
          />

          <FeatureCard
            title="Quiz"
            description="Generate quizzes automatically."
          />

        </div>

        <SummaryCard summary={summary} />

        <Flashcard />

        <QuizCard />

      </main>

      <Footer />

    </>
  );
}

export default Home;