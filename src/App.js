import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'Feb 5th at 2:30PM',
      reminder: true
    },
    {
      id: 2,
      text: "School Meeting",
      day: 'Feb 6th at 1:30PM',
      reminder: true
    },
    {
      id: 3,
      text: "Grocery Shopping",
      day: 'Feb 5th at 2:30PM',
      reminder: false
    }
]
)

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
