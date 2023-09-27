import { Box, Checkbox, CheckboxProps, FormControlLabel, TextField, TextFieldProps } from "@mui/material"
import { useField } from "formik"
import { ReactNode } from "react"

export interface MyCheckBoxProps extends CheckboxProps {
    name: string
    value?: string | number 
    label?: string
}

export const MyCheckBox = (props: MyCheckBoxProps) => {
    const [ field ] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value
    }) 
    
    return <FormControlLabel control={<Checkbox {...props} {...field} />} label={props.label}></FormControlLabel>
}

// Custom TextField
export type MyTextFieldProps =  { 
    name: string
    label?: string
} & TextFieldProps;


export const MyTextField = (props: MyTextFieldProps) => {
    const [field, meta, helpers] = useField({
        name: props.name,
    });
    
    return <TextField error={meta.error && meta.touched ? true : false} helperText={meta.error && meta.touched ? meta.error : ''} {...props} {...field} />
}

//Modal component
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

