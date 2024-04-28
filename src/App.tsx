import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Modal from 'react-modal';
import SaveCase from './SaveCase';
import NotificationMenu from './NotificationMenu';
import TabComponent from './ReferTab';

const App: React.FC = () => {
  const [isNotificationActive, setIsNotificationActive] = useState(false);

  const toggleNotification = () => {
    setIsNotificationActive(prevState => !prevState);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);
  const closebothModal = () => {
    closeModal1();
    closeModal2();
  };

  return (
    <div className="App min-h-screen flex justify-center items-center">
      <header className="text-center">
        <h1 className="text-3xl font-bold">ReferOut and Notification Test Page</h1>
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
        <button className="shadow-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal1}>Refer Out</button>
        {/* <button onClick={openModal4}>Open Refer 4</button> */}
        <Modal className='flex w-full min-h-screen justify-center item-center' isOpen={isOpen1} onRequestClose={closeModal1}>
          <div className="my-auto">
            <div className="bg-white p-6 items-center justify-center w-full mx-auto rounded-xl shadow-md z-50">
            <div className="text-blue-700 text-xl font-semibold">
              ข้อมูลการส่งต่อ (Refer Out)
            </div>
            <TabComponent />
            <div className="flex ml-6 gap-4">
      <button className="shadow-md shadow-neutral-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal2}>
          บันทึก
      </button>
      <button className="shadow-md shadow-neutral-500 bg-gray-50 hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded" onClick={closeModal1}>
          ยกเลิก
      </button>
      </div>
            </div>
          </div>
        </Modal>
        <Modal className='flex w-full min-h-screen justify-center item-center' isOpen={isOpen2} onRequestClose={closeModal2}>
        <div className="my-auto">
            <div className="flex flex-col bg-white p-10 justify-item-center item-center justify-center  rounded-xl shadow-md">
            <div className="text-black text-2xl item-center font-bold">
          <SaveCase />
          </div>
          <div className='text-center'>
          <button className="inline-block  shadow-md items-center justify-center shadow-neutral-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closebothModal}>
          ปิด
      </button>
      </div>
          </div>
          </div>
        </Modal>
      </header>
    </div>
  );
};

export default App;
