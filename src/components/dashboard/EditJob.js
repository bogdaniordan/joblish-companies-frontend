
import React, {useState} from 'react';
import Navbar from '../navigation/Navbar';
import {useStyles} from "../../utils/FormStyling";
import {useHistory, useLocation} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useForm} from "react-hook-form";
import { ContactSupportOutlined } from '@material-ui/icons';


const EditJob = ({job}) => {

    const location = useLocation();
    const classes = useStyles();
    const history = useHistory()

    var stripedHtml = location.state.job?.description.replace(/<[^>]+>/g, '');

    const [preloadedValues, setPreloadedValues] = useState({
        category: location.state.job?.category,
        city: location.state.job?.city,
        country: location.state.job?.country,
        date: location.state.job.date,
        description: stripedHtml,
        jobType: location.state.job?.jobType,
        salary: location.state.job?.salary,
        title: location.state.job?.title,
    });

    console.log()

    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: preloadedValues
    });

    return (
        <>
        <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Edit job
                    </Typography>
                    <form className={classes.form} onSubmit={
                        handleSubmit((data) => {
                            console.log(data)
                            history.push("/dashboard")
                        })
                    } noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    {...register("category", {required: true})}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="category"
                                    label="Category"
                                    autoFocus
                                />
                                {errors.firstName && <span style={{color:"red"}}>This field is required!</span>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    {...register("city", {required: true})}
                                    autoComplete="city"
                                />
                                {errors.lastName && <span style={{color:"red"}}>This field is required!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="country"
                                    label="Country"
                                    {...register("country", {required: true})}
                                    autoComplete="country"
                                />
                                {errors.email && <span style={{color:"red"}}>Please enter a valid email!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("date", {required: true, minLength: 2, maxLength: 30 })}
                                    // label="Date"
                                    type="date"
                                    id="date"
                                    autoComplete="date"
                                />
                                {errors.password && <span style={{color:"red"}}>Please enter a valid city name!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("description", {required: true, minLength: 2})}
                                    label="Description"
                                    type="description"
                                    id="outlined-multiline-flexible"
                                    autoComplete="description"
                                    multiline
                                    maxRows={20}
                                />
                                {errors.description && <span style={{color:"red"}}>Too short!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("jobType", {required: true})}
                                    label="Job Type"
                                    type="jobType"
                                    id="jobType"
                                    autoComplete="jobType"
                                />
                                {errors.jobType && <span style={{color:"red"}}>Please enter a valid JobType</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("salary", {required: true, minLength: 2, maxLength: 20, pattern: /^[0-9\b]+$/ })}
                                    label="Salary"
                                    type="salary"
                                    id="salary"
                                    autoComplete="salary"
                                />
                                {errors.salary && <span style={{color:"red"}}>Please enter a valid Salary!</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register("title", {required: true})}
                                    label="Title"
                                    type="title"
                                    id="title"
                                    autoComplete="title"
                                />
                                {errors.title && <span style={{color:"red"}}>Too short!</span>}
                            </Grid>
                            {/*<Grid item xs={12}>*/}
                            {/*    <label style={{marginRight: "10px"}}>Looking for a job</label>*/}
                            {/*    <input name="lookingForJob" id="lookingForJob" {...register("lookingForJob")} type="checkbox"/>*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Update
                        </Button>
                    </form>
                </div>
            </Container>    
        </>
    )
}

export default EditJob