import React, { useState } from 'react';
import { ModalBackgroundStyled, ModalBackgroundBlurStyled, ModalBodyStyled } from './CriminalUpdateModalStyled';
import { Box, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { Controller, useForm } from "react-hook-form";

/* interface CriminalUpdateModalProps {
  property: string;
} */
const styleModalProps = {
    on: {
        opacity: "1",
        pointersEvents: "auto"
    },
    off: {
        opacity: "0",
        pointersEvents: "none" 
    }
};

interface FormInfosType {
    name: string,
    age: number,
    gender: "female" | "male",
    country: string,
    weapon: string,
    offense: string,
    dangerLevel: "High" | "Medium" | "Low",
};
    

const CriminalUpdateModal: React.FC = () => {
    const { reset, control } = useForm<FormInfosType>({
        defaultValues: {
            name: "",
            age: 0,
            gender: "male",
            country: "Brazil",
            weapon: "Knife",
            offense: "Assault",
            dangerLevel: "Low",  
        },
    });

    const [modalProps, setModalProps] = useState(styleModalProps.on);

  return (
    <ModalBackgroundStyled style={modalProps}>
        <ModalBackgroundBlurStyled>
            <ModalBodyStyled>
                <form>
                    <Controller control={control}  name="name" render={({ field }) => (
                        <TextField {...field} label="Name" variant="outlined" />
                    )} />

                    <Controller control={control} name="age" render={({ field }) => (
                        <TextField {...field} type="number" label="Age" variant="outlined" />
                    )} />

                    <Controller control={control} name="gender" render={({ field }) => (
                        <Box>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup {...field} row sx={{display: "flex", justifyContent: "center"}} aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </Box>
                    )} />     

                    <Controller control={control} name="country" render={({ field }) => (
                        <TextField {...field} label="Country" variant="outlined" />
                    )} />

                    <Controller control={control} name="dangerLevel" render={({ field }) => (
                        <Box>
                            <InputLabel id="demo-simple-select-label">Danger Level</InputLabel>
                            <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select">
                                <MenuItem value={"Low"}>Low</MenuItem>
                                <MenuItem value={"Medium"}>Medium</MenuItem>
                                <MenuItem value={"High"}>High</MenuItem>
                            </Select>
                        </Box>
                    )} />               

  
                </form>
            </ModalBodyStyled>               
        </ModalBackgroundBlurStyled>
    </ModalBackgroundStyled>
  );
};

export default CriminalUpdateModal;
