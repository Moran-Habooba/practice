import React from "react";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";

const SignUp = () => {
  const form = useFormik({
    initialValues: {
      mail: "",
      name: "",
      password: "",
    },
    onSubmit(values) {
      console.log(values);
    },
    validate(values) {
      const schema = Joi.object({
        mail: Joi.string()
          .min(2)
          .max(255)
          .required()
          .email({ tlds: { allow: false } }),
        name: Joi.string().min(6).max(255).required(),
        password: Joi.string().min(6).max(1024).required(),
      });
      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        const key = detail.path[0];
        errors[key] = detail.message;
      }
      return errors;
    },
  });

  return (
    <div className="container">
      <form onSubmit={form.handleSubmit} className="row" action="">
        <div className="col">
          <Input
            title="Mail"
            type="email"
            {...form.getFieldProps("mail")}
            error={form.touched.mail && form.errors.mail}
          />
        </div>
        <div className="col ">
          <Input
            title="Name"
            type="text"
            {...form.getFieldProps("name")}
            error={form.touched.name && form.errors.name}
          />
        </div>
        <div className="col ">
          <Input
            title="Password"
            type="password"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
          />
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <button className="btn btn-secondary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
