import React, { useState, useCallback, useEffect } from "react";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Backdrop, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getPossible } from "../../api/canParking";

import CarBody from "../../assets/images/bugatti_body.png";
import CarTire from "../../assets/images/bugatti_tire.png";
import "./SportsCar.scss";
import { finishCheck } from "../../modules/isCheck";
import Success from "../../assets/images/Success";
import Failure from "../../assets/images/Failure";
import ResultContainer from "../../containers/ResultContainer/ResultContainer";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const SportsCar = () => {
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);
    const [possible, setPossible] = useState(0);
    const [result, setResult] = useState({});
    const myLocation = useSelector((state) => state.location);
    const canParking = useCallback(() => {
        setLoading(true);
        setTimeout(async () => {
            setLoading(false);
            const response = await getPossible(myLocation);
            if (myLocation.isBuilding || response.can_parking) {
                setPossible(1);
            } else {
                setPossible(2);
            }
            setResult(response);
        }, 1000);
        setPossible(0);
    }, [myLocation]);

    const classes = useStyles();
    const isCheck = useSelector((state) => state.isCheck.check);
    const reduxDispatch = useDispatch();
    useEffect(() => {
        if (isCheck) {
            canParking();
        }
    }, [isCheck, canParking]);

    return (
        <>
            <Backdrop
                className={classes.backdrop}
                open={isCheck}
                onClick={() => reduxDispatch(finishCheck())}
            >
                <div className="sportscar">
                    <div className="bugatti">
                        <img className="bugatti_body" src={CarBody} alt="" />
                        <img
                            className={cn("bugatti_tire", { loading })}
                            src={CarTire}
                            alt=""
                        />
                        <img
                            className={cn("bugatti_tire2", { loading })}
                            src={CarTire}
                            alt=""
                        />
                    </div>
                    <div
                        className={cn(
                            "status",
                            possible === 1 ? " success" : ""
                        )}
                    >
                        <Success />
                    </div>
                    <div
                        className={cn(
                            "status",
                            possible === 2 ? " failure" : ""
                        )}
                    >
                        <Failure />
                        <Button
                            className="show-result"
                            onClick={() => setClick(true)}
                        >
                            결 과
                        </Button>
                    </div>
                </div>
            </Backdrop>
            <ResultContainer
                click={click}
                setClick={setClick}
                result={result}
            />
        </>
    );
};

export default SportsCar;
