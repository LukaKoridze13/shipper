import usePasswordToggle from "@/hooks/usePasswordToggle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const useSignUp = () => {
    const [showPassword, togglePasswordVisibility] = usePasswordToggle();

    const schema = yup.object().shape({
      email: yup.string().required("required"),
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      number: yup.number().required("required"),
      city: yup.string().required("required"),
      address: yup.string().required("required"),
      password: yup.string().required("required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Required"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        number: 0,
        city: "",
        address: "",
        password: "",
        confirmPassword: "",
      },
    });
  
    const onSubmit = (data: any) => {
      console.log(data);
    };
     return {
       showPassword, togglePasswordVisibility, register, handleSubmit, onSubmit, errors
     }
}

export default useSignUp