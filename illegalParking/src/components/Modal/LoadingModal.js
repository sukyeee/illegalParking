import React from "react";
import { useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const LoadingModal = () => {
    const classes = useStyles();
    const loading = useSelector((state) => state.loading.isLoading);
    return (
        <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default LoadingModal;
