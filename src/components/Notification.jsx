import React from "react";
import { DialogComponent } from '@syncfusion/ej2-react-popups';

const Notification = ()=>{
    return (
        <div>
            <DialogComponent width='250px' target='#dialog-target' showCloseIcon={true} header='Dialog' closeOnEscape={false}>
          This is a dialog with header </DialogComponent>
        </div>
    )
}

export default Notification
