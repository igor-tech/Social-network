import React from 'react';

type ContactPropsType = {
    contactValue?: string
    contactTitle: string
}
export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <>{contactValue && <div><b>{contactTitle}</b>: {contactValue}</div>}</>
}