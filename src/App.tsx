import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Modal from 'react-modal';
import Refer4 from './Refer4';
import NotificationMenu from './NotificationMenu';
import TabComponent from './ReferTab';

const App: React.FC = () => {
  const [isNotificationActive, setIsNotificationActive] = useState(false);

  const toggleNotification = () => {
    setIsNotificationActive(prevState => !prevState);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  const openModal4 = () => setIsOpen4(true);
  const closeModal4 = () => setIsOpen4(false);

  return (
    <div className="App min-h-screen flex justify-center items-center">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        {isNotificationActive && (
          <>
            <div className="fixed z-10 top-0 left-0 w-full h-screen bg-black/25 pointer-events-none" />
            <div className="fixed z-20 top-14 right-4">
              <NotificationMenu onClose={toggleNotification} />
            </div>
          </>
        )}
        <div
          className={`absolute top-4 right-4 cursor-pointer ${isNotificationActive ? 'text-red-500' : ''}`}
          onClick={toggleNotification}
        >
          <NotificationsNoneIcon/>
        </div>
        <button className="shadow-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal1}>Open Refer 1</button>
        <button onClick={openModal4}>Open Refer 4</button>
        <Modal className='flex w-full min-h-screen justify-center item-center' isOpen={isOpen1} onRequestClose={closeModal1}>
          <div className="my-auto">
            <div className="bg-white p-6 items-center justify-center w-full mx-auto rounded-xl shadow-md z-50">
            <div className="text-blue-700 text-xl font-semibold">
              ข้อมูลการส่งต่อ (Refer Out)
            </div>
            <TabComponent />
            </div>
          </div>
        </Modal>
        <Modal isOpen={isOpen4} onRequestClose={closeModal4}>
          <Refer4 />
        </Modal>
      </header>
    </div>
  );
};

export default App;
