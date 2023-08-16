import React, { useState } from 'react';
import { ModalBackgroundStyled, ModalBackgroundBlurStyled, ModalBodyStyled } from './CriminalUpdateModalStyled';
import { Autocomplete, Box, Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { Controller, useForm } from "react-hook-form";
import { dangerLevels, offenses, weapons } from '../utils/personProcessor';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

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
        <ModalBackgroundBlurStyled component="form">
                <ModalBodyStyled container spacing={2}>
                    <Grid item xs={6}>
                        <Controller control={control}  name="name" render={({ field }) => (
                                <TextField fullWidth {...field} label="Name" variant="outlined" />
                        )} />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller control={control} name="age" render={({ field }) => (
                                <TextField fullWidth {...field} type="number" label="Age" variant="outlined" />
                        )} />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller control={control} name="country" render={({ field }) => (
                                <TextField fullWidth {...field} label="Country" variant="outlined" />
                            )} /> 
                    </Grid>

                    <Grid item xs={6}>
                        <Controller control={control} name="dangerLevel" render={({ field }) => (
                            <Autocomplete
                            disablePortal
                            options={dangerLevels}
                            renderInput={(params) => <TextField {...field} {...params} label="Danger Level" />}
                          />
                            )} />    
                    </Grid>

                    <Grid item xs={6}>
                        <Controller control={control} name="weapon" render={({ field }) => (
                            <Autocomplete
                            disablePortal
                            options={weapons}
                            renderInput={(params) => <TextField {...field} {...params} label="Weapon" />}
                          />
                            )} />    
                    </Grid>

                    <Grid item xs={6}>
                        <Controller control={control} name="offense" render={({ field }) => (
                            <Autocomplete
                            disablePortal
                            options={offenses}
                            renderInput={(params) => <TextField {...field} {...params} label="Offense" />}
                          />
                            )} />    
                    </Grid>

                    <Grid item xs={12}>
                        <Controller control={control} name="gender" render={({ field }) => (
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup {...field} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </Box>
                            )} />   
                    </Grid>    
                    <Grid item xs={6}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Update
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" endIcon={<CancelIcon />}>
                            Cancel
                        </Button>
                    </Grid>                
                </ModalBodyStyled>            
        </ModalBackgroundBlurStyled>
    </ModalBackgroundStyled>
  );
};

export default CriminalUpdateModal;
