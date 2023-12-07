import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import style from "./style.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.Form}>
      <TextField size="small"
        label="First name"
        {...register("firstName", { required: true, maxLength: 80 })}
      /><br></br>
      <TextField size="small"
        label="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      /><br></br>
      <TextField size="small"
        label="Mobile number"
        {...register("mobileNumber", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      /><br></br>
      <TextField size="small"
        label="Last name"
        {...register("lastName", { required: true, maxLength: 100 })}
      /><br></br>

      <Select {...register("title", { required: true })}>
        <MenuItem value="Mr">Mr</MenuItem>
        <MenuItem value="Mrs">Mrs</MenuItem>
        <MenuItem value="Miss">Miss</MenuItem>
        <MenuItem value="Dr">Dr</MenuItem>
      </Select><br></br>

      <RadioGroup row {...register("developer", { required: true })}>
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup><br></br>

      <TextField size="small"
        label="Website"
        {...register("website", { required: true, maxLength: 50 })}
      /><br></br>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

      {Object.keys(errors).length > 0 && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Please fix the errors in the form.
        </div>
      )}
    </form>
  );
}
