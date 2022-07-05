import React from 'react';

export default function Form() {
  return (
    <div>
      <p>Form</p>
      <Greeting />
      <Input label="first name" id="firstname" />
      <Input label="last name" id="lastname" />
    </div>
  );
}

function Input({ label, id }: { label: string; id: string }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </div>
  );
}

function Greeting() {
  return <div>Hello</div>;
}
