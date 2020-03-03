import React from 'react'
import {Dispatch, Action} from 'redux'
import {GlobalActionType} from '../../Actions'
import { useDispatch } from 'react-redux';

export default function () {
    const dispatcher = useDispatch();
    return (
        <div className="grid grid-cols-6 text-center md:grid-cols-3 text-sm text-blue-400 bg-gray-800 font-bold">
            <a href="" className="btn-nav">SAVE MORE ON APP</a>
            <a href="" className="btn-nav">SELL ON LAZADA</a>
            <a href="" className="btn-nav">CUSTOMER CARE</a>
            <a href="" className="btn-nav">TRACK MY ORDER</a>
            <a className="btn-nav col-span-2 hover:cursor-pointer" onClick={() => dispatcher({type: GlobalActionType.SetOpLoginModalTrue})}>LOGIN / SIGN UP</a>
        </div>
    )
}