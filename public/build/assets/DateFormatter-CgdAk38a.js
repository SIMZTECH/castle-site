const i=e=>{const t=new Date(e*1e3),o={year:"numeric",month:"long",day:"numeric"},n=t.toLocaleDateString("en-US",o),a=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});return{formattedDate:n,formattedTime:a}};export{i as f};