const initial=[]
const Imagecollector=(state=initial,action)=>{
    switch (action.type) {
        case  'add':
            console.log("payload",action.payload)
            state= action.payload
              return state
    
        default:
            return state;
            
    }
}
export default Imagecollector