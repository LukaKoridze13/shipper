import usePasswordToggle from "@/hooks/usePasswordToggle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const useLogin = () => {
    const [showPassword, togglePasswordVisibility] = usePasswordToggle();

    const schema = yup.object().shape({
      email: yup.string().required("required"),
      password: yup.string().required("required"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        password: "",
        email: "",
      },
    });
    const onSubmit = (data: any) => {
      console.log(data);
    };

    return {onSubmit, errors, register, handleSubmit, showPassword, togglePasswordVisibility }
}

export default useLogin