import React from "react";
const questions = [
  {
    id: 1,
    question: "What is useState and how does it work in React?",
    answer:
      "useState is a React Hook that allows me to add state to add functionality to the web.It is most important hook in react js.it has 2 state.First one is initial value and the second one is a function .When the function value changes the intial value change",
  },
  {
    id: 2,
    question: "What is the purpose of useEffect in React?",
    answer:
      "useEffect is a React Hook that manages side effects in functional components.",
  },
  {
    id: 3,
    question: "What is a custom hook in React and when should you use one?",
    answer:
      "A custom hook in React is just a function that starts with use and let us reuse logic (like toggling, fetching, form handling) in the components.",
  },
  {
    id: 4,
    question:
      "Difference between controlled and uncontrolled components. Which one is better?",
    answer:
      "Controlled is better for most cases — more control. On the otherhand , Uncontrolled is good for quick but is basic.",
  },
  {
    id: 5,
    question: "Tell us something about useFormStatus() in React.",
    answer:
      "useFormStatus() is a hook from React’s new server actions (like in Next.js 13+).",
  },
];
const Blogs = () => {
  return (
    <div className="mt-10  w-11/12 md:w-10/12 lg:w-3/4 mx-auto space-y-2">
      {questions.map((ask, index) => (
        <div key={index}>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-2xl font-bold">
              {ask.question}
            </div>
            <div className="collapse-content font-medium text-lg">
              {ask.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
