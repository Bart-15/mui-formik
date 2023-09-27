import { array, boolean, mixed, number, object, string } from 'yup';

export const FormDemoSchema = object({
    fullName: string().required("Fullname is required").min(2).max(50),
    initialInvestment: number()
        .required("Initial Investment is required")
        .min(100, "Initial Investment must be greater than or equal to 100"),
    investmentRisk: array(string().oneOf(['High', 'Medium', 'Low'])).min(1, "You must have at least 1 item selected"),
    commentAboutInvestmentRisk: mixed().when("investmentRisk", {
        is: (investmentRisk: string[]) => investmentRisk.find(item => item === "High"),
        then: (_schema) => string()
            .required("Comment About Investment Risk is required")
            .min(20, "Comment About Investment Risk must be at least 20 characters")
            .max(100, "Comment About Investment Risk must be at most 100 characters"),
        otherwise: (schema) => schema.notRequired()
    }),
    dependents: number().required().min(0, "Dependents must be greater than or equal 0").max(5),
    acceptedTermsAndConditions: boolean().oneOf([true], "You must agree to accept the terms and conditions")
});

