import React from "react";
import {Letters} from "../letters";
import {Numbers} from "../numbers";
import {Board} from "../board";

import './desk.css'

export function Desk() {
    return (
        <div className="desk">
            <Numbers />
            <Board />
            <Letters />
        </div>
    )
}