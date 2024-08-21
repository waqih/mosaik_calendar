import { BsAlarm } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import image from './images/Rectangle 305.png';

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const state = {
    events: [
      {
        start: moment('2024-08-21T09:00:00').toDate(),
        end: moment('2024-08-21T10:00:00').toDate(),
        title: 'Meeting with Team',
        subtitle: 'Project updates',
        profilePhoto: { image },
        attendees: ['Alice', 'Bob']
      },
    ]
  };

  const Event = ({ event }) => (
    <div className='h-[100%] w-[auto]'>
<div className="absolute" style={{ left: '-80px', top: '3px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

  <div className='text-[#233038] mb-1 flex flex-col items-center'>
    <span className="text-[#065056] font-[16px]">{moment(event.start).format('hh:mm')}</span> 
    <span className="text-[#FF6F00] font-[12px]">{moment(event.start).format('A')}</span>    
  </div>

  {/* Horizontal Line */}
  <div style={{ width: '1px', height: '60px', backgroundColor: 'lightgray', margin: '10px 0' }}></div>


  <div className='text-[#233038] mb-1 flex flex-col items-center'>
    <span className="text-[#065056] font-[16px]">{moment(event.end).format('hh:mm')}</span> 
    <span className="text-[#FF6F00] font-[12px]">{moment(event.end).format('A')}</span>     
  </div>
</div>



      <div className='absolute ml-[-30px] mt-[42px]' style={{ zIndex: 100 }}>
        <img
          src={image}
          alt="Profile"
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            border: '1px solid transparent',
            backgroundImage: 'linear-gradient(to right, rgba(255, 111, 0, 1), black), linear-gradient(#065056, #FF6F00)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '5px', height: '100%', marginLeft: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderRight: '2px solid lightgray', paddingRight: 10 }}>
          <span className='text-[#233038] mb-1 flex gap-2'><BsAlarm />{moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</span>
          <strong className='text-[#065056] font-[14px]'>{event.title}</strong>
          <span className="text-[#233038]">{event.subtitle}</span>
        </div>
        <div className="flex flex-col" style={{ textAlign: 'right', marginLeft: '10px', display: 'flex', alignItems: 'center', color: 'black', gap: 5 }}>
          <span style={{ marginRight: '5px' }}>
            <svg width="33" height="22" viewBox="0 0 33 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 21C2.77385 18.0523 6.66156 16.0349 12.7269 16.0349C18.7923 16.0349 22.68 18.0523 24.4538 21M25.576 13.7997C28.788 15.3997 30.394 16.9997 32 20.1997M22.2353 1.57006C23.7467 2.38004 24.7741 3.97051 24.7741 5.80005C24.7741 7.57673 23.8052 9.12796 22.3651 9.9579M17.5449 5.8C17.5449 8.45097 15.3878 10.6 12.7269 10.6C10.066 10.6 7.90888 8.45097 7.90888 5.8C7.90888 3.14903 10.066 1 12.7269 1C15.3878 1 17.5449 3.14903 17.5449 5.8Z" stroke="url(#paint0_linear_0_589)" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear_0_589" x1="16.5" y1="1" x2="16.5" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#065056" />
                  <stop offset="1" stopColor="#FF6F00" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>{event.attendees.length} </span>
          <span>Attendees</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className='mt-[10px]'>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={state.events}
        components={{ event: Event }}
        style={{ height: 400 }}
      />
    </div>
  );
};

export default MyCalendar;
