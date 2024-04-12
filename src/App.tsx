import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationMenu from './NotificationMenu';

const App: React.FC = () => {
  const [isNotificationActive, setIsNotificationActive] = useState(false);

  const toggleNotification = () => {
    setIsNotificationActive(prevState => !prevState);
  };

  return (
    <div className="App min-h-screen flex justify-center items-center">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        {isNotificationActive && (
          <div className="absolute top-16 right-4 bg-white shadow-md p-4 rounded">
            <NotificationMenu onClose={toggleNotification} />
          </div>
        )}
        <div
          className={`absolute top-4 right-4 cursor-pointer ${isNotificationActive ? 'text-red-500' : ''}`}
          onClick={toggleNotification}
        >
          <NotificationsNoneIcon />
        </div>
      </header>
    </div>
  );
};

export default App;
