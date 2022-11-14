import React , { useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import * as moment from "moment"
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Popping from './Popping';


import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import {useNavigate} from "react-router-dom";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from './modal.jsx'
import {useSelector,useDispatch} from 'react-redux';
import { event } from '../../../Redux/Axios/event.js'

const locales = {
  'en-US': enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const MyCalendar = () => {
  // console.log("myprop",data)
  const [isProductModal, setIsProductModal] = useState(false);
  
  const [popModaldata, setpopModaldata] = useState({start:"",end:"",title:"",describe:""});
  const mystate= useSelector((state)=>state)
  console.log("myprop useselecti",mystate)
  const {events, ShowEventApi, closeEvent, ShowEventsApi}=mystate
  const [open, setOpen] = useState(false);
  const [renderStatus, rerender] = useState(false);
  const [firstRender, setFirstRender] = useState(false)
  const dispatch= useDispatch()
  useEffect(()=>{
    (async()=>{

      const result = await event.get("/calendars");

    try{
        const convertedDates = await result.data.map(event=>{
            return{
              title: event.title,
              start: new Date(event.start) ,
              end: new Date(event.end) ,
              id: event._id,
              describe: event.describe
            }
          })
        await dispatch({
          type: "SHOW_EVENTS",
          payload: convertedDates
      })
    }catch(err){
         const error =await err.data.message;
         return error
    }
      
    })()

  },[])


  useEffect(()=>{
    (async()=>{

      const result = await event.get("/calendars");

    try{
        const convertedDates = await result.data.map(event=>{
            return{
              title: event.title,
              start: new Date(event.start) ,
              end: new Date(event.end) ,
              id: event._id,
              describe: event.describe
            }
          })
        await dispatch({
          type: "SHOW_EVENTS",
          payload: convertedDates
      })
    }catch(err){
         const error =await err.data.message;
         return error
    }
      
    })()
    console.log("i renderd");
  },[renderStatus,firstRender])
 

  const openEventClick = async(ev)=>{
       setOpen(true)
       if(ev.id) {
    
    const result = await event.get(`/calendars/${ev.id}/show`);

    try{
        const {title, _id, start, end, describe} = await result.data;
        const convertedEvent = {
            title,
            describe,
            id: _id,
            start: moment(start).format("ddd DD MMM YY LT"),
            end: moment(end).format("ddd DD MMM YY LT")
        }
       const re= await dispatch({
          type: "SHOW_EVENT",
          payload:convertedEvent
      })
      
      
    }catch(err){
         const error =await err.data.message;
         console.log(error)
    }
       }
       
       
  }

  const closeEventClick = () =>{
    setOpen(false);
    setTimeout(()=>closeEvent(),300) ;
  }
  
  
  const DragAndDropCalendar = withDragAndDrop(Calendar);
 
   const  moveEvent=async(data)=> { 

     console.log("re",data) 
     const {start,end} = data;
     
     const nes = {...data.event,start,end};
     console.log("ure",nes) 
     const ev= data
     
     try{
      const result = await event.put(`/calendars/${nes.id}/update`, {
          title: nes.title,
          start: nes.start,
          end: nes.end,
          describe: nes.describe
        })
        
       console.log("rsultui",result)
        const response = result.data;
        dispatch({type:"REMOVE_ERROR"})
      
          setFirstRender(!firstRender)
        
  }catch(err){
      console.log(err)
      dispatch({type: "ADD_ERROR",payload: err.response.data});
  }
     
     
    }
   const eventResize = async(data) => {
     
     const {start,end} = data;
     
     const nes = {...data.event,start,end};
     console.log("ure",nes) 
     try{
      const result = await event.put(`/calendars/${nes.id}/update`, {
          title: nes.title,
          start: nes.start,
          end: nes.end,
          describe: nes.describe
        })
       console.log("rsultui",result)
       if(result.status==200){
         const response = result.data;
 
         dispatch({type:"REMOVE_ERROR"})
       
           setFirstRender(!firstRender)

       }else{
         alert("continu")
       }
        
  }catch(err){
      console.log(err)
      dispatch({type: "ADD_ERROR",payload: err.response.data});
  }
//      const { start, end,id } = data;
     
// const newState = events.map(obj =>
//   obj.id === id ? { ...obj, start,end } : obj
// );
// console.log("REAISX",newState)

      // this.setState((state) => {
      //   state.events[0].start = start;
      //   state.events[0].end = end;
      //   return { events: state.events };
      // });
    };
    const onDropFromOutside=(data)=>{
      console.log("onDropFromOutside",data)
    }
    console.log("popModaldata",popModaldata)
    const insert=async()=>{
      const result = await event.post("/calendars", {
        title: popModaldata.title,
        start: popModaldata.start,
        end: popModaldata.end,
        describe: popModaldata.describe
      }).then(res=>{
        console.log("res",res)
       
       if(res && res.data){
           console.log("event from the api going to the reducer: ", res.data)
           dispatch({
            type: "ADD_EVENT",
            payload: res.data
          }) 
          setIsProductModal(false)
           dispatch({type:"REMOVE_ERROR"})
           
          }

        })
        .catch(res=>{
          console.log("catch response, ", res)
          if(res.response.data){
            
            console.log(res.response.data)
            dispatch({
              type: "ADD_ERROR",
              payload: res.response.data
            });
          }
        })
    }
    return (
    <div style={{width:"100%",background:"white",height:"100vh"}}>
           <Modal
      isModal={isProductModal}
      setIsModal={setIsProductModal}
      title="Agenda"
      popModaldata={popModaldata}
    >
      <input type="text"  onChange={(e)=>setpopModaldata({...popModaldata,"title":e.target.value}) }/>
      <textarea placeholder="This is an awesome comment box" rows="5" name="comment[text]" id="comment_text" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"  onChange={(e)=>setpopModaldata({...popModaldata,"describe":e.target.value}) }></textarea>
<button onClick={insert}>Enter</button>


    </Modal>
    
        <Popping
        open={open}
        setOpen={setOpen}
        rerender={rerender}
        renderStatus={renderStatus}
        
        />
        <DragAndDropCalendar
            events={events}
            localizer={localizer}
            defaultDate={new Date()}
            // view="month"
            
          //   onSelectSlot={(slotInfo) => {
          //     alert(slotInfo)
          // }}
          // selectable
            startAccessor="start"
            endAccessor="end"
            onEventResize={eventResize}
            resizable
            
            onEventDrop={moveEvent}
            style={{ height: "100vh", fontFamily: 'Patrick Hand' }}
            // onSelectEvent={openEventClick}
            selectable
            onDropFromOutside={onDropFromOutside}
            onSelectEvent={openEventClick}
            onSelectSlot={(e) =>{ 
              console.log("evevr",e,e.start,e.end)
              setpopModaldata({start:e.start,end:e.end})
              setIsProductModal(true)
            }}
            eventPropGetter={(event, start, end, isSelected) => {
              console.log("evnt color",event)
              let newStyle = {
                // backgroundColor: "indigo",
                // color: 'black',
                // borderRadius: "5px",
                // border: "1px solid white"
              };
        
              if (event.id!="6359655f065c08313c87edd5"){
                
              }else{
                newStyle.backgroundColor = "skyblue"
              }
        
              return {
                className: "",
                style: newStyle
              };
            }}

        />
    </div>
        
    )
}
// function mapStateToProps({event, events}){
//   return{
//     event,
//     events
//   }
// }

 export default MyCalendar