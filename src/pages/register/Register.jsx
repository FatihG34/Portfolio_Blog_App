import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Formik } from 'formik';
import { FaLock } from 'react-icons/fa';
import FormComp from '../../components/form/FormComp';
import { formSchema } from '../../components/form/formSchema';

const Register = () => {
    return (
        <Container>
            <Avatar
                sx={{
                    backgroundColor: 'primary.main',
                    m: 'auto',
                    width: 60,
                    height: 60,
                }}
                sizes='100px'
            >
                <FaLock size='40' />
            </Avatar>
            <Typography 
            variant='h4'
            align='center'
            mb={4}
            color= 'primary.dark'
            >
                Register
            </Typography>
            <Formik
            initialValues={{firstName:'', lastName:'', email:'', password:''}}
            validationSchema={formSchema}
            onSubmit={(values, actions)=>{
                actions.resetForm();
                actions.setSubmitting()
            }}
                component={(props) => <FormComp {...props} />}
            >

            </Formik>
        </Container>
    )
}

export default Register