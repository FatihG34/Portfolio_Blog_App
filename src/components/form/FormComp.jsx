import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import { Form } from 'formik';

const FormComp = ({ values, handleChange, errors, touched, handleBlur }) => {
    return (
        <Form>
            <Stack spacing={3} direction='column' >
                <TextField
                    label='First Name'
                    type='text'
                    name='firstName'
                    variant='outlined'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="firstName"
                    helperText={touched.firstName && errors.firstName}
                    error={touched.firstName && Boolean(errors.firstName)}
                />
                <TextField
                    label='Last Name'
                    type='text'
                    name='lastName'
                    variant='outlined'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="lastName"
                    helperText={touched.lastName && errors.lastName}
                    error={touched.lastName && Boolean(errors.lastName)}
                />
                <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur && null}
                    helperText={touched.email && errors.email}
                    error={touched.email && Boolean(errors.email)}
                />
                <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange && null}
                    onBlur={handleBlur && null}
                    helperText={touched.password && errors.password}
                    error={touched.password && Boolean(errors.password)}
                />
                <Button
                    variant='contained'
                    type='submit'
                    value='submit'
                    size='large'
                >Submit</Button>
            </Stack>
        </Form>
    )
}

export default FormComp