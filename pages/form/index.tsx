import { MyCheckBox, MyTextField } from "@/components/Form/FormFields";
import { InvestmentDetails } from "@/types/form.types";
import { FormDemoSchema } from "@/validation/formDemo";
import { Box, Button, Container, FormHelperText, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Head from 'next/head';

const initVal: InvestmentDetails = {
    fullName: '',
    initialInvestment: 0,
    investmentRisk: [],
    commentAboutInvestmentRisk: '',
    dependents: -1,
    acceptedTermsAndConditions: false
}

const dependents: number[] = [1, 2, 3, 4, 5];

async function handleSubmit(values:InvestmentDetails, formikHelpers: FormikHelpers<InvestmentDetails>){

    // perform axios request
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            console.log("FormVal:", values);
            console.log("formikHelpers:", formikHelpers);
            console.log("--------####################----------");
            
            resolve(values);
        }, 5000);
    });

    
}

const DemoForm = () => {
    return (
        <>
        <Head>
            <title>Practice Formik w/ Yup</title>
        </Head>
        <Container>
            <Typography variant="h3" textAlign="center" gutterBottom mt={10}>Formik</Typography>

            <Stack component={Paper} elevation={2}>
                <Formik initialValues={initVal} validationSchema={FormDemoSchema} onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)}>
                    {
                        ({values, errors, touched, isSubmitting, isValidating}) => (
                            <Box sx={{
                                padding: {xs: '35px', md: '60px'}
                            }}>
                                <Form>
                                    <Box mb={2}>
                                        <MyTextField name="fullName" size="small" label="Full Name" fullWidth/>
                                    </Box>

                                    <Box mb={2}>
                                        <MyTextField name="initialInvestment" size="small" type="number" label="Initial Investment" fullWidth/>
                                    </Box>

                                    <Stack mb={2}>
                                    {/* Checkboxes */}
                                        <MyCheckBox 
                                        name="investmentRisk" 
                                        value="High" 
                                        label="High - Super Risky" />

                                        <MyCheckBox 
                                        name="investmentRisk" 
                                        value="Medium" 
                                        label="Medium - Risky" />

                                        <MyCheckBox 
                                        name="investmentRisk" 
                                        value="Low" 
                                        label="Low - Safe" />
                                    {/* End Checkboxes */}

                                    { touched.investmentRisk && errors.investmentRisk ? <FormHelperText color="error">{ errors.investmentRisk }</FormHelperText> : null}
                                    </Stack>

                                    <Box mb={2}>
                                        <MyTextField name="commentAboutInvestmentRisk" multiline maxRows={10} fullWidth label="Comment About Investment Risk" />
                                    </Box>
                                    
                                    <Box mb={2} display="flex" flexDirection="column">
                                        <Field
                                        error={touched.dependents && errors.dependents ? true : false} 
                                        name="dependents" 
                                        as={Select} 
                                        size="small">
                                            <MenuItem value={-1}>Select ...</MenuItem>
                                            {
                                                dependents.map(item => (
                                                    <MenuItem key={item} value={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Field>
                                        { touched.dependents && errors.dependents ? <FormHelperText color="error">{ errors.dependents }</FormHelperText> : null}
                                    </Box>

                                    <MyCheckBox 
                                    name="acceptedTermsAndConditions" 
                                    label="Accept terms and conditions" 
                                    color="primary" 
                                    />
                                    { touched.acceptedTermsAndConditions && errors.acceptedTermsAndConditions ? <FormHelperText color="error">{ errors.acceptedTermsAndConditions }</FormHelperText> : null}

                                    <br />

                                    <Button type="submit" variant="outlined" sx={{display:"block"}} disabled={isSubmitting || isValidating}>Submit</Button>

                                    {/*  */}
                                    <Typography variant="subtitle1">Errors</Typography>
                                    <pre>{JSON.stringify(errors, null, 4)}</pre>

                                    <Typography variant="subtitle1">Values</Typography>
                                    <pre>{JSON.stringify(values, null, 4)}</pre>

                                </Form>
                            </Box>
                        )   
                    }
                </Formik>
            </Stack>
        </Container>
        </> 
    );
}

export default DemoForm;
