import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Refer1: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <label>ข้อมูลการส่งต่อผู้รับบริการ</label>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>เลขที่การส่งต่อผู้รับบริการ</label>
          <select className="border-2 border-gray-200 rounded h-8 w-64">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>เลขที่การส่งต่อผู้รับบริการกลางฯ</label>
          <input className="border-2 border-gray-200 rounded h-8 w-56" type="text" />
        </div>
        <div className="flex flex-col">
          <label>วันที่ส่งต่อผู้รับบริการ</label>
          <input className="border-2 border-gray-200 rounded h-8 w-40" type="date" />
        </div>
        <div className="flex flex-col">
          <label>เวลาที่ส่งต่อผู้รับบริการ</label>
          <input className="border-2 border-gray-200 rounded h-8 w-40" type="time" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>หน่วยบริการที่ส่งผู้รับบริการมา</label>
          <select className="border-2 border-gray-200 rounded h-8 w-64">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>เลขที่ส่งต่อหน่วย</label>
          <select className="border-2 border-gray-200 rounded h-8 w-56">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>แผนกที่ส่งต่อผู้รับบริการ</label>
          <select className="border-2 border-gray-200 rounded h-8 w-40">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>ผลตรวจร่างกายสำคัญ</label>
          <input className="border-2 border-gray-200 rounded h-8 w-64" type="text" />
        </div>
        <div className="flex flex-col">
          <label>วินิจฉัยโรคแรกรับ (ชื่อโรค)</label>
          <input className="border-2 border-gray-200 rounded h-8 w-56" type="text" />
        </div>
        <div className="flex flex-col">
          <label>วินิจฉัยโรคแรกสุดท้าย (ชื่อโรค)</label>
          <input className="border-2 border-gray-200 rounded h-8 w-40" type="text" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>สาเหตุที่ส่งต่อ Refer</label>
          <select className="border-2 border-gray-200 rounded h-8 w-64">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>ไปที่หน่วยบริการ</label>
          <select className="border-2 border-gray-200 rounded h-8 w-56">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>สภาพผู้รับบริการก่อนส่งต่อ</label>
          <input className="border-2 border-gray-200 rounded h-8 w-40" type="text" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>ประเภทผู้รับบริการ</label>
          <select className="border-2 border-gray-200 rounded h-8 w-64">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>ระดับความเร่งด่วน</label>
          <select className="border-2 border-gray-200 rounded h-8 w-56">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>กลุ่มโรคเฉพาะเพื่อส่งต่อ</label>
          <select className="border-2 border-gray-200 rounded h-8 w-40">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>สิ่งที่ขอให้ดำเนินการ (รายละเอียดอื่นๆ)</label>
          <input className="border-2 border-gray-200 rounded h-8" type="text" />
        </div>
        <div className="flex flex-col">
          <label>แพทย์ผู้รักษา</label>
          <select className="border-2 border-gray-200 rounded h-8 w-56">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>การนำส่ง</label>
          <select className="border-2 border-gray-200 rounded h-8 w-40">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4">
      <button className="shadow-md shadow-neutral-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          บันทึก
      </button>
      <button className="shadow-md shadow-neutral-500 bg-gray-100 hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
          ยกเลิก
      </button>
      </div>
    </div>
  );
};

export default Refer1;
