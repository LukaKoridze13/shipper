import { useState } from "react";

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return [showPassword, togglePasswordVisibility] as const;
};

export default usePasswordToggle;
