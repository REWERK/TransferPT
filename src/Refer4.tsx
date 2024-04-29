import React, { useState } from 'react';

const Refer2: React.FC = () => {
  // State for input values
  const [referOut, setReferOut] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  // Function to handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
    }
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

    function setIsOpen(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto">
          <div>
            <label className="block">แนบไฟล์เอกสาร หรือ ไฟล์ภาพ</label>
            <input
              type="file"
              onChange={handleFileUpload}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              multiple  // Add the multiple attribute
            />
          </div>
        </form>
        {selectedFiles && (
          <div>
            <h2 className="text-lg font-semibold mt-4">Selected Files:</h2>
            <ul>
              {Array.from(selectedFiles).map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
  );
};

export default Refer2;