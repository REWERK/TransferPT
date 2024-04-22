import React, { useState, useEffect } from 'react';
import { Notifications, KeyboardArrowDown } from '@mui/icons-material';

interface NotificationMenuProps {
  onClose: () => void;
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({ onClose }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [notificationCount, setNotificationCount] = useState<number>(0);
  const [openSubMenu, setOpenSubMenu] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    // Fetch notification count from backend API
    // Example API call using fetch:
    fetch('https://your-backend-api.com/notifications/count')
      .then(response => response.json())
      .then(data => setNotificationCount(data.count))
      .catch(error => console.error('Error fetching notification count:', error));
  }, []);

  const toggleSubMenu = (item: number) => {
    setOpenSubMenu(prevState => ({ ...prevState, [item]: !prevState[item] }));
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <aside className="w-96 h-[50vh] max-h-[50vh] bg-white shadow-md rounded-3xl rounded-tl overflow-y-auto">
      <h2 className="sticky top-0 text-center w-full py-3 border-b text-blue-700 font-bold text-3xl bg-white">
        Notification
      </h2>
      <section className="flex flex-col gap-4 p-4">
        {[{
          level: 4
        }, {
          level: 2
        }, {
          level: 2
        }, {
          level: 2
        }, {
          level: 2
        }].map(({ level }) =>
          <article className="flex w-full items-start text-gray-500 gap-2">
            <header className="flex flex-col justify-center items-center my-auto w-16 gp-1">
              <div className="w-9 h-9 rounded-full bg-gray-200" />
              <p className="text-gray-700 text-sm">ระดับ {level}</p>
            </header>
            <section className="flex flex-col justify-center items-start flex-1 gap-1 text-sm leading-4">
              <p>Hello World</p>
              <p>Hello World</p>
              <p>Hello World</p>
            </section>
            <p className="bg-blue-600 px-2.5 py-1 rounded-full shadow-md text-white text-sm my-auto">
              รอยืนยัน
            </p>
          </article>
        )}
      </section>
    </aside>
  );
};

export default NotificationMenu;