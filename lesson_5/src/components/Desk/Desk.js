import React from "react";
import {Block} from "../Block";
import {Letters} from "../Letters";
import {Numbers} from "../Numbers";
import {Knight} from "../Knight";

import './desk.css'

export function Desk() {
    return (
        <div className="desk">
            <Numbers/>
            <div className="main">
                <Letters/>
                <div className="chess">
                    {[...Array(8)].map((_, keyX) => (
                        <div key={keyX} className="row">
                            {[...Array(8)].map((_, keyY) => (
                                <Block key={`${keyX}${7 - keyY}`} x={keyX} y={7 - keyY}/>)
                            )}
                        </div>
                    ))}
                    <Knight/>
                </div>
                <Letters/>
            </div>
            <Numbers/>
        </div>
    )
}
