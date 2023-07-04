import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
