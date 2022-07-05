import React, { cloneElement, ReactElement, useState } from 'react';

type TriggerControllerProps = {
  handleOpen: () => void;
};

export type AddOperationTriggerProps = {
  TriggerController: ReactElement<TriggerControllerProps>;
};

export const AddOperationTrigger = ({ TriggerController }: AddOperationTriggerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {cloneElement(TriggerController, { handleOpen: () => setOpen(true) })}
      {open && (
        <dialog>
          <h2>Dialog title</h2>
        </dialog>
      )}
    </>
  );
};
