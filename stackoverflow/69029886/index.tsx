import React from "react"

export const Button = ({ text, type }) => {
    return (
        <div>
            <button aria-label={text} className={`Button`} type={type}>
                {text}
            </button>
        </div>
    )
}