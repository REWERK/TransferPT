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
    <div className="bg-white p-4 rounded">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span>แจ้งเตือนผู้ใช้บริการ </span><span className="ml-8">({notificationCount})</span>
        </div>
      </div>
      <div
        className={`flex items-center mb-2 cursor-pointer py-2 ${selectedItem === 1 ? 'text-red-500 border-b border-gray-300' : ''}`}
        onClick={() => toggleSubMenu(1)}
      >
        <span>แจ้งเตือนผู้ใช้งานระบบ</span> <span className="ml-3">({notificationCount}) {openSubMenu[1] ? <KeyboardArrowDown /> : null}</span>
      </div>
      <div
        className={`flex items-center mb-2 cursor-pointer py-2 ${selectedItem === 2 ? 'text-blue-500 border-b border-gray-300' : ''}`}
        onClick={() => toggleSubMenu(2)}
      >
        <span>แจ้งเตือน refer</span> <span className="ml-14">&nbsp;({notificationCount}) {openSubMenu[2] ? <KeyboardArrowDown /> : null}</span>
      </div>
    </div>
  );
};

export default NotificationMenu;
