import React from 'react'
import {
    Alert,
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    // FormControl,
    // FormLabel,
    // RadioGroup,
    // Radio,
    FormHelperText,
    Stack,
    TextField,
    Typography
  } from '@mui/material';
  // import * as yup from 'yup';
  import { useForm, SubmitHandler, Controller } from 'react-hook-form';
  import { literal, number, object, string, TypeOf } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';
  import { useEffect, useState } from 'react';
//   import Footer from '../Footer';
// import { Inner } from '../InnerHeader';
  
  
  
  import Checkbox from '@mui/material/Checkbox';
import { useHistory } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';

  
  
  
  const registerSchema = object({
    // first_name: string()
    //   .nonempty('Name is required')
    //   .max(32, 'Name must be less than 100 characters'),
      
    //   last_name: string()
    //   .nonempty('Name is required')
    //   .max(32, 'Name must be less than 100 characters'),
    
      // contact:string()
      // .nonempty('Contact number is required')
      // .max(10, 'please enter valid number'),
  
    email: string().nonempty('Email is required').email('Email is invalid'),
  
    // RadioGroup: yup.string().oneOf(['female'], 'You must select female.'),
    password: string()
      .nonempty('Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
//     password_confirmation: string().nonempty('Please confirm your password'),
//     terms: literal(true, {
//       invalid_type_error: 'Accept Terms is required',
//     }),
//   }).refine((data) => data.password === data.password_confirmation, {
//     path: ['password_confirmation'],
//     message: 'Passwords do not match',
  });

const setPassword = () => {

    const [loading, setLoading] = useState(false);
    // const[alert,setAlert]=useState(false);
  
    const {
      register,
      formState: { errors, isSubmitSuccessful },
      reset,
      
      handleSubmit,
    } = useForm({
      resolver: zodResolver(registerSchema),
    });

    // const RegisterData = useSelector((state)=>state.register);
    // console.log(RegisterData)

    // const dispatch = useDispatch();

   
  
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset();
        // setAlert(true)
      }
     
    }, [isSubmitSuccessful]);

    const[value,setValue]=useState();
  
    const onSubmitHandler = (values) => {
      // e.preventDefault()
      var formData = new FormData();
    formData.append('email', values.email);
    // formData.append('first_name', values.first_name);
    // formData.append('last_name', values.last_name);
    formData.append('password', values.password);
    // formData.append('password_confirmation', values.password_confirmation);

      console.log("here 96",values)
    //   fetch('http://surc.online/api/customer/login', {  // Enter your IP address here

    //   method: 'POST', 
    //   mode: 'cors', 
    //   body: formData,// body data type must match "Content-Type" header

    // }).then(resp=>{
    //   return resp.json();
    // //   if (resp.ok) {
    // //     return resp.json()
        
    // //   } else {
    // //     // If the API responds meaningful error message,
    // //     // then you can get it by calling response.statusText
    // //     return  resp.statusText
    // //   }

     
    // }).then(function(data){
    //   console.log(data);

    // })
    
          };


    console.log(errors);







  return (
    <>
    
     
    <div>
    <section class="vh-50" style={{backgroundColor: "#eee"}}>
  <div class="container h-fit">
  <div><br></br></div>
  <div><br></br></div>
    <div class="row d-flex justify-content-center align-items-center ">
      <div class="col-lg-4 col-xl-8">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                {/* <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p> */}
                 
                <div style={{
        backgroundColor: '#eee' ,
        width: '350px',
        height: '550px',
        borderRadius: "25px",
        blockSize: "fit-content"
        // paddingLeft: "15px"
        }}>
          
      {
         alert == true &&
         <Stack 
        //  sx={{ width :'50%'}}
          spacing={2}>
         <Alert 
         onClose={() => {}}> form submitted succefully </Alert>
         </Stack>
      }
     <div><br></br></div>
      
      <Box sx={{ maxWidth: '50rem' }} >
        <Typography paddingLeft={4}>
        <Typography variant='h5' component='h5'   sx={{ mb: '1rem'}}>
          Set Password
        </Typography>
      
        <Box
          component='form'
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit(onSubmitHandler)}
        >

       {/* <TextField
            sx={{ mb: 2}}
            label='email'
            inputProps={{
              style: {
                height: "11px",
                width:  "260px"
              }
            }}
            required
            type='email'
            error={!!errors['email']}
            helperText={errors['email'] ? errors['email'].message : ''}
            {...register('email')}
          /> */}
          {/* <TextField
            sx={{ mb:2}}
            label='First Name'
            inputProps={{
              style: {
                height: "11px",
                width:  " 260px"
              }
            }}
            required
            error={!!errors['first_name']}
            helperText={errors['first_name'] ? errors['first_name'].message : ''}
            {...register('first_name')}
          /> */}

          {/* <TextField
            sx={{ mb: 2 }}
            label='Last Name'
            inputProps={{
              style: {
                height: "11px",
                width:  " 260px"
              }
            }}
            required
            error={!!errors['last_name']}
            helperText={errors['last_name'] ? errors['last_name'].message : ''}
            {...register('last_name')}
          /> */}
  
           {/* <TextField
            sx={{ mb: 2 }}
            label='contact'
            fullWidth
            required
            type='number'
            error={!!errors['']}
            helperText={errors['contact'] ? errors['contact'].message : ''}
            {...register('contact')}
          /> */}
          
  
           {/* <div className="mt-48 mb-16">
            <Controller
              render={({ field }) => (
                <FormControl error={!!errors.RadioGroup} required>
                  <FormLabel className="font-medium text-14" component="legend">
                    select your gender
                  </FormLabel>
                  <RadioGroup {...field} aria-label="gender" name="gender1">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                  <FormHelperText>{errors?.RadioGroup?.message}</FormHelperText>
                </FormControl>
              )}
              name="RadioGroup"
              control={control}
            />
          </div> */}
  
  
  {/* <RadioGroup name="nameRadio" value={''}>
      <FormControlLabel
            value={'value1'}
            control={<Radio required={true} />}
            label={'Label 1'}
          />
       <FormControlLabel
            value={'value2'}
            control={<Radio required={true} />}
            label={'Label 2'}
          />
    </RadioGroup> */}
  
  
          <TextField
            sx={{ mb: 2 , minHeight:""}}
            label='Password'
            inputProps={{
              style: {
                height: "11px",
                width:  "260px"
              }
            }}
            required
            type='password'
            error={!!errors['password']}
            helperText={errors['password'] ? errors['password'].message : ''}
            {...register('password')}
          />
  
           
  
          <TextField
            sx={{ mb: 2 }}
            label='Confirm Password'
            required
            inputProps={{
              style: {
                height: "11px",
                width:  "260px"

              }
            }}
            type='password'
            error={!!errors['password_confirmation']}
            helperText={
              errors['password_confirmation'] ? errors['password_confirmation'].message : ''
            }
            {...register('password_confirmation')}
          />
  
          {/* <FormGroup>
            <FormControlLabel
              control={<Checkbox required />}
              {...register('terms')}
              label={
                <Typography color={errors['terms'] ? 'error' : 'inherit'}>
                  Accept Terms and Conditions
                </Typography>
              }
            />
            <FormHelperText error={!!errors['terms']}>
              {errors['terms'] ? errors['terms'].message : ''}
            </FormHelperText>
          </FormGroup> */}
  
          <Button
            // onClick={Handle}
            variant='contained'
            // size="small"
            type='submit'
            // loading={loading}
            // sx={{ py: '0.8rem', mt: '1rem' }}
            borderRadius="25px"
            href='/login'
          >
            Set Password
          </Button>
         
          <div><br></br></div>
        </Box>
        </Typography>
      </Box>
      
      </div>
      
      
              
                {/* <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form> */}

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div><br></br></div>
  <div><br></br></div>
  <div><br></br></div>
  <div><br></br></div>
  <div><br></br></div>
  <div><br></br></div>
  <div><br></br></div>
</section>
    </div>
    
    
   
    </>
  )
}

export default setPassword