import React, { useEffect, useState } from 'react';
import { ModalBackgroundStyled, ModalBackgroundBlurStyled, ModalBodyStyled } from './CriminalUpdateModalStyled';
import { Autocomplete, Box, Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { dangerLevels, offenses, weapons } from '../utils/personProcessor';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import { CriminalsDataType, useGlobalStateCriminals } from '../store/StateGlobal';

const styleModalProps = {
  on: {
    opacity: "1",
    pointerEvents: "auto",
  },
  off: {
    opacity: "0",
    pointerEvents: "none",
  },
};

interface FormInfosType {
  name: string;
  age: number;
  gender: "female" | "male";
  country: string;
  weapon: string;
  offense: string;
  dangerLevel: "High" | "Medium" | "Low";
}

interface CriminalUpdateProps extends FormInfosType {
  uuid: string;
}

const CriminalUpdateModal = (props: CriminalUpdateProps) => {
  const criminals = useGlobalStateCriminals();

  const { reset, control, handleSubmit } = useForm<FormInfosType>({
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

  useEffect(() => {
    if (props) {
      setModalProps(styleModalProps.on);
      reset(props);
    }    
  }, [props])

  const [modalProps, setModalProps] = useState(styleModalProps.on);

  const updateHandler : SubmitHandler<FormInfosType> = (formValues: FormInfosType) => {
    let currentCriminals = criminals.get();
    currentCriminals = currentCriminals.map((criminal: CriminalsDataType) => {
      if (props.uuid = criminal.uuid) {
        return {
          uuid: criminal.uuid,
          name: formValues.name,
          age: formValues.age,
          gender: formValues.gender,
          country: formValues.country,
          weapon: formValues.weapon,
          offense: formValues.offense,
          dangerLevel: formValues.dangerLevel,
          img: criminal.img
        }
      }
      return criminal;
    })
    criminals.set(currentCriminals as any);
  }

  return (
    <ModalBackgroundStyled style={modalProps as any}>
        <ModalBackgroundBlurStyled component="form" onSubmit={handleSubmit(updateHandler)}>
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
                            onChange={((e, value: string | null) => {field.onChange(value)})}
                            disablePortal
                            options={dangerLevels}
                            renderInput={(params) => <TextField {...params} {...params} label="Danger Level" />}
                          />
                            )} />    
                    </Grid>

                    <Grid item xs={6}>
                        <Controller control={control} name="weapon" render={({ field }) => (
                            <Autocomplete
                            onChange={((e, value: string | null) => {field.onChange(value)})}
                            disablePortal
                            options={weapons}
                            renderInput={(params) => <TextField {...params} {...params} label="Weapon" />}
                          />
                            )} />    
                    </Grid>

                    <Grid item xs={6}>
                        <Controller control={control} name="offense" render={({ field }) => (
                            <Autocomplete
                            onChange={((e, value: string | null) => {field.onChange(value)})}
                            disablePortal
                            options={offenses}
                            renderInput={(params) => <TextField {...params} label="Offense" />}
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
                    <Grid item xs={12} spacing={4} container justifyContent="center">
                        <Grid item xs={5}>
                          <Button type="submit" onClick={(() => { setModalProps(styleModalProps.off) })} fullWidth variant="contained" color="success" endIcon={<SendIcon />}>
                              Update
                          </Button>
                        </Grid>
                        <Grid item xs={5}>
                          <Button onClick={(() => { setModalProps(styleModalProps.off); reset(); })} fullWidth variant="contained" color="error" endIcon={<CancelIcon />}>
                            Cancel
                          </Button>
                        </Grid>  
                    </Grid>              
                </ModalBodyStyled>            
        </ModalBackgroundBlurStyled>
    </ModalBackgroundStyled>
  );
};

export default CriminalUpdateModal;
