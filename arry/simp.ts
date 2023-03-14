
import React from 'react'

export default function simp() {
    function fx() {
        const arr = [1,2,3]
        arr.push(2)
        console.log(arr);
    }
    return fx()
}
