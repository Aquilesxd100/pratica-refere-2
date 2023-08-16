import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import {
  FormPoliceAuthentication,
  SchemaPoliceValidation,
} from "../pages/Login/utils/validation";
import { useGlobalStatePolices } from "../store/StateGlobal";

const MainLogin = () => {
  const polices = useGlobalStatePolices();
  const navigate = useNavigate();

  const EmpityLogin: any = {
    firstName: "",
    secondName: "",
    identificationNumber: "",
    registrationDate: "",
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormPoliceAuthentication>({
    resolver: yupResolver(SchemaPoliceValidation),
    defaultValues: EmpityLogin,
  });

  const onSubmit: SubmitHandler<FormPoliceAuthentication> = (values) => {
    const findPolice = polices.get().some((item) => {
      return (
        item.firstName === values.firstName &&
        item.secondName === values.secondName &&
        item.identificationNumber === values.identificationNumber &&
        item.registrationDate === values.registrationDate
      );
    });

    if (findPolice) {
      localStorage.setItem("policeOnline", "true");
      navigate("/criminals");
    }

    reset();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          width="100%"
          height="100vh"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{
            backgroundImage:
              'url("https://images6.alphacoders.com/456/thumb-1920-456498.jpg")',
            backgroundPosition: "center",
          }}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(4, 1fr)"}
            gap={2}
            padding={"20px"}
            borderRadius={"10px"}
            border="1px solid #1976d2"
            sx={{ backgroundColor: "white" }}
          >
            <Box gridColumn="span 4">
              <Typography
                variant="h4"
                textAlign={"center"}
                fontFamily={"fantasy"}
              >
                POLICE SYSTEM
              </Typography>
            </Box>
            <Box gridColumn="span 4">
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    {...field}
                    label="First Name"
                    variant="outlined"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                  />
                )}
              />
            </Box>
            <Box gridColumn="span 4">
              <Controller
                control={control}
                name="secondName"
                render={({ field }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    {...field}
                    label="Second Name"
                    variant="outlined"
                    error={!!errors.secondName}
                    helperText={errors?.secondName?.message}
                  />
                )}
              />
            </Box>
            <Box gridColumn="span 2">
              <Controller
                control={control}
                name="identificationNumber"
                render={({ field }) => (
                  <ReactInputMask mask="999999" maskChar={null} {...field}>
                    {/* @ts-ignore */}
                    {() => (
                      <TextField
                        sx={{ width: "100%" }}
                        {...field}
                        label="Identification Number"
                        variant="outlined"
                        error={!!errors.identificationNumber}
                        helperText={errors?.identificationNumber?.message}
                      />
                    )}
                  </ReactInputMask>
                )}
              />
            </Box>
            <Box gridColumn="span 2">
              <Controller
                control={control}
                name="registrationDate"
                render={({ field }) => (
                  <ReactInputMask mask="99/99/9999" maskChar={null} {...field}>
                    {/* @ts-ignore */}
                    {() => (
                      <TextField
                        sx={{ width: "100%" }}
                        {...field}
                        label="Registration Date"
                        variant="outlined"
                        error={!!errors.registrationDate}
                        helperText={errors?.registrationDate?.message}
                      />
                    )}
                  </ReactInputMask>
                )}
              />
            </Box>
            <Box gridColumn="span 4">
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default MainLogin;
