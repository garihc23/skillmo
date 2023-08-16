import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email_id: Yup.string().email('Invalid email').required('Required'),
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  // confirm_password: Yup.string()
  //   .required('Required')
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  // account_type: Yup.string().required('Required'),
  country_code: Yup.string().required('Required'),
  mobile: Yup.string().required('Required'),
});

export default validationSchema;
