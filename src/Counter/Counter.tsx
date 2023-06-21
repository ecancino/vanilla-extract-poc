import { useState, useCallback } from "react";
import Button, { ButtonProps } from "../Button/Button";

export default function Counter(props: Omit<ButtonProps, "onClick">) {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    () => setCount((count) => count + 1),
    [setCount]
  );

  return (
    <Button {...props} onClick={increment}>
      Count is {count}
    </Button>
  );
}
