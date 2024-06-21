import React from 'react';
import MTNPayment from './MTNPayment';
import AiretelPayment from './AiretelPayment';
import ZamtelPayment from './ZamtelPayment';
import KazangPayment from './KazangPayment';
import PayGoPayment from './PayGoPayment';
import ZanacoPayment from './ZanacoPayment';

function SelectedPaymentSystem({name,auth}) {
  switch (name) {
    case "MTN":{
        return <MTNPayment user={auth}  value={name}/>
    }
    case "AIRTEL":{
        return <AiretelPayment user={auth} value={name}/>
    }
    case "ZAMTEL":{
        return <ZamtelPayment user={auth} value={name}/>
    }
    // case "ZANACO":{
    //     return <ZanacoPayment user_id={user_id} value={name}/>
    // }
    case "PAYGO":{
        return <PayGoPayment/>
    }
    case "VISA":{
        return <MTNPayment/>
    }
    case "MASTERCARD":{
        return <MTNPayment/>
    }
    default:{
        return <MTNPayment/>
    }
  }
}

export default SelectedPaymentSystem;
