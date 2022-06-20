import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  const questionsArray = questions.map(function (question) {
    return <SingleQuestion key={question.id} {...question}></SingleQuestion>;
  });

  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <div>{questionsArray}</div>
      </section>
    </main>
  );
}

export default App;
