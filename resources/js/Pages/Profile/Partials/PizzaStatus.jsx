import React from 'react';

function PizzaStatus({currentStatus}) {
  const statuses = [
    'Ordered',
    'Prepping',
    'Baking',
    'Checking',
    'Ready'
  ];

  const getClass=(status,index)=>{
    let baseClass=`w-1/5 ${index==0?'rounded-l-full':''} h-20 bg-gradient-to-b items-center justify-center flex  border-r-2 transition-all`;
    
    if(index==0){
      baseClass +='rounded-l-full';
    }

    if(index==(statuses.length-1)){
      baseClass=baseClass.replace('border-r-2','rounded-r-full');
    }

    if(currentStatus==status){
      baseClass=baseClass.replace('border-r-2','');
      return `${baseClass} from-red-500 to-red-600 scale-110 rounded shadow-lg`;
    }

    // statuses that have passed already
    if(statuses.indexOf(currentStatus)>index){
      return `${baseClass} from-blue-500 to-blue-600 border-blue-700`;
    }

    // default syle for those below the current status

    return `${baseClass} from-blue-300 to-blue-400 border-blue-500`;
  }


  return (
    <div className="flex border-4 border-blue-200 rounded-full">
      {statuses.map((status, index) =>
        (<div key={index} className={getClass(status,index)}>
          <p className="uppercase font-medium italic text-white drop-shadow text-center">
            <span className="block text-3xl font-bold not-italic leading-none">{index + 1}</span>
            {status}
          </p>
        </div>)
      )}
    </div>
  )
}

export default PizzaStatus