import { generateArray } from "utils-react";

export const App = () => {
  const array = generateArray(10);

  console.log(array);
  return (
    <div>
      <h2>
        Project created using{" "}
        <a href="https://github.com/wesleyara/create-app">create-app!</a>
      </h2>
    </div>
  );
};
