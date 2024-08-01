import { useState } from "react";
import questions from "./data";
import Score from "./Score";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

  function nextQuestion() {
    setIndex(index + 1);
    setHasSubmitted(false);
    setSelectedOption(null); // Reset selected option for the new question
    setBgcolor(null);
  }
  function alreadySubmitted() {
    toast.error("already submitted please move to next Question");
  }

  function optionClicked(option) {
    setSelectedOption(option);
  }

  function submitButton() {
    if (!hasSubmitted) {
      if (selectedOption !== null) {
        const correctAnswer = questions[index].correctAns;
        if (selectedOption === correctAnswer) {
          setScore(score + 5);
          toast.success("correct Answer");
        } else {
          setScore(score - 1);
          toast.error("wrong Answer");
        }
        setHasSubmitted(true); // Set submission status to true
      } else {
        alert("Please select an option before submitting.");
      }
    }
  }

  return (
    <div className="flex justify-center items-center select-none">
      {index < questions.length ? (
        <div className="flex flex-col justify-center items-center w-96 bg-[#260b57] rounded-md mt-10">
          <div>
            <div className="text-white flex justify-between font-serif text-xl mb-5 mt-5">
              <div className="w-64 h-auto">{`Q.${index + 1} ${
                questions[index].ques
              }?`}</div>
              <span className="text-xs">5 points</span>
            </div>
            {questions[index].options.map((option, i) => (
              <div
                key={i}
                onClick={() => optionClicked(option)}
                className={`w-80 h-10 mb-2 rounded-xl flex gap-2 items-center cursor-pointer ${
                  selectedOption === option ? "bg-yellow-500" : "bg-white"
                } `}
              >
                <span className="w-7 h-7 rounded-full bg-orange-600 ml-2 text-center font-bold text-white">
                  {String.fromCharCode(65 + i)}{" "}
                  {/* Convert index to letter A, B, C, D */}
                </span>
                <span className="font-medium text-xl">{option}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={hasSubmitted ? alreadySubmitted : submitButton}
              className="w-24 h-10 bg-orange-600 text-white rounded-md cursor-pointer"
            >
              Submit
            </button>

            {index === questions.length - 1 ? (
              <button
                onClick={() => {
                  setIndex(index + 1);
                }}
                className={`w-24 h-10 ${
                  hasSubmitted
                    ? "bg-orange-600 text-white"
                    : "bg-gray-400 text-gray-700"
                } rounded-md cursor-pointer`}
              >
                Check Score
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className={`w-24 h-10 ${
                  hasSubmitted
                    ? "bg-orange-600 text-white"
                    : "bg-gray-400 text-gray-700"
                } rounded-md cursor-pointer`}
                disabled={!hasSubmitted}
              >
                Next
              </button>
            )}

            <button
              onClick={() => setIndex(index + 1)}
              className={`w-24 h-10  bg-orange-600 text-white rounded-md cursor-pointer`}
              // disabled={!hasSubmitted}
            >
              Skip
            </button>
          </div>
          <div className="text-white text-xs font-light m-2">{`${index + 1}/${
            questions.length
          }`}</div>
          {/* <div className="text-white">{`Score - ${score}`}</div> */}
        </div>
      ) : (
        <Score
          score={score}
          questions={questions}
          index={index}
          className="text-white"
        />
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
